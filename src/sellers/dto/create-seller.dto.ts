import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateSellerDto {
  @IsEmail()
  email;

  @IsString()
  password;

  @IsString()
  username;

  @IsString()
  phone;

  @IsString()
  nickname;

  @IsString()
  region;

  @IsString()
  agency_name;

  @IsBoolean()
  notification_agree;
}
