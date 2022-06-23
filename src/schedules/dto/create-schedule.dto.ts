import { IsDateString, IsNumberString, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNumberString()
  product_id: number;

  @IsDateString()
  date: Date;
}
