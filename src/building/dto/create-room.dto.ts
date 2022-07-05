import { IsArray, IsNumberString, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsNumberString()
  floorId: number;

  @IsArray()
  rooms: string[];
}
