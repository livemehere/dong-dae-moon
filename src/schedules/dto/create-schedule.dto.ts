import { IsNumberString, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNumberString()
  product_id: number;

  @IsString()
  date: Date;
}
