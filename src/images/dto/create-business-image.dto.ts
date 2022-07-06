import { IsNumberString, IsString } from 'class-validator';

export class CreateBusinessImageDto {
  @IsNumberString()
  id: number;
}
