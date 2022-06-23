import { Product } from 'src/products/entities/product.entity';
import { Schedule } from './entities/schedule.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    try {
      const product = await this.productRepository.findOneBy({
        id: createScheduleDto.product_id,
      });

      const newSchedule = new Schedule();
      newSchedule.product = product;
      newSchedule.date = createScheduleDto.date;
      return await this.scheduleRepository.save(newSchedule);
    } catch (e) {
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.scheduleRepository.find({
      relations: ['product'],
    });
  }

  findOne(id: number) {
    return this.scheduleRepository.findOne({
      where: {
        id,
      },
      relations: ['product'],
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    try {
      return await this.scheduleRepository.update(id, updateScheduleDto);
    } catch (e) {
      return e.driverError?.sqlMessage || e;
    }
  }

  remove(id: number) {
    return this.scheduleRepository.delete(id);
  }
}
