import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Buyer } from '../buyers/entities/buyer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Buyer])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
