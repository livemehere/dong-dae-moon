import { IsNumberString, isString, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumberString()
  buyer_id: number;

  @IsString()
  description: string;

  @IsString()
  tags: string;
}
