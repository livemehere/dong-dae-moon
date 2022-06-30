import { IsBoolean, IsEmail, IsNumberString, IsString } from 'class-validator';

export class CreateBuyerDto {
  @IsString()
  uid: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  username: string;

  @IsString()
  phone: string;

  @IsString()
  business_registration: string;

  @IsNumberString()
  building_id: number;

  @IsString()
  store_name: string;

  @IsString()
  store_address: string;

  @IsString()
  building_floor: string;

  @IsString()
  building_section: string;

  @IsString()
  building_room: string;

  @IsBoolean()
  notification_agree: boolean;

  // product 합친 부분
  @IsString()
  description: string;

  @IsString()
  tags: string;
}
