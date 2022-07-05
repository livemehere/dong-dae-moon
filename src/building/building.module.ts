import { Floor } from './entities/floor.entity';
import { Building } from './entities/building.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Building, Floor])],
  controllers: [BuildingController],
  providers: [BuildingService],
})
export class BuildingModule {}
