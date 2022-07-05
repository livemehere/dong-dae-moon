import { IsArray, IsString } from 'class-validator';

export class CreateBuildingDto {
  @IsString()
  buildingName: string;

  @IsArray()
  floor: string[];
}
