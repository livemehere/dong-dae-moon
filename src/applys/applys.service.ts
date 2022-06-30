import { Schedule } from './../schedules/entities/schedule.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { Apply } from './entities/apply.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
import { Repository } from 'typeorm';
import { Buyer } from '../buyers/entities/buyer.entity';

@Injectable()
export class ApplysService {
  constructor(
    @InjectRepository(Apply)
    private applyRepository: Repository<Apply>,

    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,

    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,

    @InjectRepository(Schedule)
    private ScheduleRepository: Repository<Schedule>,
  ) {}

  async create(createApplyDto: CreateApplyDto) {
    const seller = await this.sellerRepository.findOneBy({
      id: createApplyDto.seller_id,
    });

    const buyer = await this.buyerRepository.findOneBy({
      id: createApplyDto.buyer_id,
    });

    const schedule = await this.ScheduleRepository.findOneBy({
      id: createApplyDto.schedule_id,
    });

    if (!seller) {
      throw new BadRequestException(
        `id(${createApplyDto.seller_id}) seller is not exist`,
      );
    }

    if (!buyer) {
      throw new BadRequestException(
        `id(${createApplyDto.buyer_id}) buyer is not exist`,
      );
    }

    if (!schedule) {
      throw new BadRequestException(
        `id(${createApplyDto.schedule_id}) schedule is not exist`,
      );
    }

    try {
      const newApply = new Apply();
      newApply.seller = seller;
      newApply.buyer = buyer;
      newApply.schedule = schedule;
      return this.applyRepository.save(newApply);
    } catch (e) {
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.applyRepository.find({
      relations: ['seller', 'buyer', 'schedule'],
    });
  }

  async findByBuyer(buyerId: number) {
    return this.applyRepository.find({
      where: {
        buyer: {
          id: buyerId,
        },
      },
      relations: ['seller'],
    });
  }

  findOne(id: number) {
    return this.applyRepository.findOne({
      where: { id },
      relations: ['seller', 'buyer', 'schedule'],
    });
  }

  async update(id: number, updateApplyDto: UpdateApplyDto) {
    try {
      return await this.applyRepository.update(id, updateApplyDto);
    } catch (e) {
      return e.message;
    }
  }

  remove(id: number) {
    return this.applyRepository.delete(id);
  }
}
