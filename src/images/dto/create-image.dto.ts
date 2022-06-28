import { IsNumberString, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNumberString()
  id: number;

  @IsString()
  description: string;
}
