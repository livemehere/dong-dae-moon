import { BuyersModule } from './../buyers/buyers.module';
import { AdminModule } from './../admin/admin.module';
import { QuestionsService } from './../questions/questions.service';
import { AnswersService } from './answers.service';
import { QuestionsModule } from './../questions/questions.module';
import { Answer } from './entities/answer.entity';
import { Admin } from './../admin/entities/admin.entity';
import { Question } from './../questions/entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Question]), BuyersModule],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
