import { IsNumberString, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsNumberString()
  buyer_id: number;

  @IsNumberString()
  seller_id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
