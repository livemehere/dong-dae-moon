import { Product } from './../products/entities/product.entity';
import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async upload(file, productId, description) {
    try {
      const { originalname } = file;
      const bucketS3 = process.env.AWS_S3_BUCKET_NAME;
      const result: any = await this.uploadS3(
        file.buffer,
        bucketS3,
        originalname,
      );
      await this.create(result.Location, result.key, productId, description);
      return result;
    } catch (e) {
      throw new BadRequestException(
        'form-data 형식이 아니거나 업로드에 실패하였습니다',
      );
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
    productId: number,
    description: string,
  ) {
    try {
      const product = await this.productRepository.findOne({
        where: { id: productId },
      });

      const newImage = new Image();
      newImage.key = key;
      newImage.url = location;
      newImage.product = product;
      newImage.description = description;

      return this.imageRepository.save(newImage);
    } catch (e) {
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
    console.log(image);
    return this.imageRepository.delete(image.id);
  }
}
