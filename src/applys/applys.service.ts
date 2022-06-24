import { Schedule } from './../schedules/entities/schedule.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { Apply } from './entities/apply.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class ApplysService {
  constructor(
    @InjectRepository(Apply)
    private applyRepository: Repository<Apply>,

    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Schedule)
    private ScheduleRepository: Repository<Schedule>,
  ) {}

  async create(createApplyDto: CreateApplyDto) {
    const seller = await this.sellerRepository.findOneBy({
      id: createApplyDto.seller_id,
    });

    const product = await this.productRepository.findOneBy({
      id: createApplyDto.product_id,
    });

    const schedule = await this.ScheduleRepository.findOneBy({
      id: createApplyDto.schedule_id,
    });

    if (!seller) {
      throw new BadRequestException(
        `id(${createApplyDto.seller_id}) seller is not exist`,
      );
    }

    if (!product) {
      throw new BadRequestException(
        `id(${createApplyDto.product_id}) product is not exist`,
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
      newApply.product = product;
      newApply.schedule = schedule;
      return this.applyRepository.save(newApply);
    } catch (e) {
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.applyRepository.find({
      relations: ['seller', 'product', 'schedule'],
    });
  }

  findOne(id: number) {
    return this.applyRepository.findOne({
      where: { id },
      relations: ['seller', 'product', 'schedule'],
    });
  }

  update(id: number, updateApplyDto: UpdateApplyDto) {
    return this.applyRepository.update(id, updateApplyDto);
  }

  remove(id: number) {
    return this.applyRepository.delete(id);
  }
}
