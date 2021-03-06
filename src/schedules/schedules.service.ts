import { Buyer } from './../buyers/entities/buyer.entity';
import { Schedule } from './entities/schedule.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Between, Repository } from 'typeorm';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    try {
      const buyer = await this.buyerRepository.findOneBy({
        id: createScheduleDto.buyer_id,
      });

      const newSchedule = new Schedule();
      newSchedule.buyer = buyer;
      newSchedule.start_date = createScheduleDto.start_date;
      newSchedule.end_date = createScheduleDto.end_date;
      return await this.scheduleRepository.save(newSchedule);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    // FIXME:이거 select buyer 정보 안가져와짐 .. 왜이러지 ?
    return this.scheduleRepository.find({
      relations: ['buyer', 'applys'],
      order: {
        start_date: 'ASC',
      },
    });
  }

  findByBuyer(buyerId: number, query: any) {
    const dateOption: boolean = query.year ? true : false;
    if (dateOption) {
      if (!query.month || !query.year) {
        throw new BadRequestException(
          'if you want filter by date, year and month required',
        );
      }
      return this.scheduleRepository.find({
        where: {
          buyer: {
            id: buyerId,
          },
          start_date: Between(
            new Date(`${query.year}-${query.month}-1`),
            new Date(`${query.year}-${query.month}-31`),
          ),
        },
        relations: ['buyer', 'applys'],
        order: {
          start_date: 'ASC',
        },
      });
    }

    return this.scheduleRepository.find({
      where: {
        buyer: {
          id: buyerId,
        },
      },
      relations: ['buyer', 'applys'],
      order: {
        start_date: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return this.scheduleRepository.findOne({
      where: {
        id,
      },
      relations: ['buyer', 'applys'],
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
