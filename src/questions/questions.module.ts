import { Seller } from './../sellers/entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Product, Seller])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
