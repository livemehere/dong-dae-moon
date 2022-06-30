import { IsDateString, IsNumberString, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNumberString()
  buyer_id: number;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;
}
