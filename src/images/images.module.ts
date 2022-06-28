import { Product } from './../products/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { Image } from './entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, Product])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
