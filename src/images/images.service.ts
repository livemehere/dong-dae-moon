import {
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { UpdateImageDto } from './dto/update-image.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { Buyer } from '../buyers/entities/buyer.entity';
@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async upload(file, buyerId, description) {
    try {
      const { originalname } = file;
      const bucketS3 = process.env.AWS_S3_BUCKET_NAME;
      const result: any = await this.uploadS3(
        file.buffer,
        bucketS3,
        originalname,
      );
      await this.create(result.Location, result.key, buyerId, description);
      return result;
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  async uploadBusiness(file, buyerId) {
    try {
      const { originalname } = file;
      const bucketS3 = process.env.AWS_S3_BUCKET_NAME;
      const result: any = await this.uploadS3(
        file.buffer,
        bucketS3,
        originalname,
      );
      return this.create(result.Location, result.key, buyerId, '사업자등록증');
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }

  async uploadS3(file, bucket, name) {
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: uuid(),
      Body: file,
    };

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  deleteObject(bucket: string, key: string) {
    const s3 = this.getS3();
    const params = { Bucket: bucket, Key: key };
    this.remove(key);

    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err.stack);
      // error
      else return 'deleted!';
    });
  }

  getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async create(
    location: string,
    key: string,
    buyerId: number,
    description: string,
  ) {
    try {
      const buyer = await this.buyerRepository.findOne({
        where: { id: buyerId },
      });

      if (!buyer)
        throw new NotFoundException(`id(${buyerId}) buyer is not exists`);

      const newImage = new Image();
      newImage.key = key;
      newImage.url = location;
      newImage.buyer = buyer;
      newImage.description = description;

      // 이미지 업로드할 떄 사업자 등록증이라면 한개로 유지할 수 있도록 지우고 다시 생성
      if (description === '사업자등록증') {
        const prevImage = await this.imageRepository.findOne({
          where: {
            description: '사업자등록증',
            buyer: {
              id: buyerId,
            },
          },
        });

        if (prevImage) {
          this.imageRepository.delete({ id: prevImage.id }); // image table 에서 삭제
          this.deleteObject(process.env.AWS_S3_BUCKET_NAME, prevImage.key); // S3 에서 삭제
        }

        buyer.business_registration = location;
        this.buyerRepository.save(buyer);
      }

      return this.imageRepository.save(newImage);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  async remove(key: string) {
    const image = await this.imageRepository.findOne({ where: { key } });
    if (!image) throw new NotFoundException(`key(${key}) is not exists`);
    return this.imageRepository.delete(image.id);
  }
}
