import { IsNumberString, IsString } from 'class-validator';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateAnswerDto {
  @IsNumberString()
  question_id: number;

  @IsNumberString()
  buyer_id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
