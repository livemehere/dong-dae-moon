import { IsNumberString } from 'class-validator';

export class CreateApplyDto {
  @IsNumberString()
  seller_id: number;

  @IsNumberString()
  buyer_id: number;

  @IsNumberString()
  schedule_id: number;
}
