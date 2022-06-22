import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateSellerDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  username: string;

  @IsString()
  phone: string;

  @IsString()
  nickname: string;

  @IsString()
  region: string;

  @IsString()
  agency_name: string;

  @IsBoolean()
  notification_agree: boolean;
}
