import { Schedule } from './entities/schedule.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  findAll() {
    return this.scheduleRepository.find();
  }

  findOne(id: number) {
    return this.scheduleRepository.findOneBy({ id });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    try {
      return await this.scheduleRepository.update(id, updateScheduleDto);
    } catch (e) {
      return e.driverError?.sqlMessage || e;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
