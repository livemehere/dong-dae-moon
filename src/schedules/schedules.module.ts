import { Buyer } from './../buyers/entities/buyer.entity';
import { Schedule } from './entities/schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule, Buyer])],
  controllers: [SchedulesController],
  providers: [SchedulesService],
})
export class SchedulesModule {}
