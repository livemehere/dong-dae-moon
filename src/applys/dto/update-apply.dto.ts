import { PartialType } from '@nestjs/mapped-types';
import { IsNumberString } from 'class-validator';
import { CreateApplyDto } from './create-apply.dto';

export class UpdateApplyDto extends PartialType(CreateApplyDto) {
  @IsNumberString()
  status: number;
}
