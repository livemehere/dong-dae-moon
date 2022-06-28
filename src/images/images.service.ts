import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ImagesService {
  async upload(file) {
    try {
      const { originalname } = file;
      const bucketS3 = process.env.AWS_S3_BUCKET_NAME;
      return await this.uploadS3(file.buffer, bucketS3, originalname);
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

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
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

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
