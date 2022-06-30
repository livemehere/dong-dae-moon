import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { Buyer } from './entities/buyer.entity';

@Injectable()
export class BuyersService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async create(createBuyerDto: CreateBuyerDto) {
    try {
      const newBuyer = new Buyer();
      newBuyer.uid = createBuyerDto.uid;
      newBuyer.email = createBuyerDto.email;
      newBuyer.password = createBuyerDto.password;
      newBuyer.username = createBuyerDto.username;
      newBuyer.phone = createBuyerDto.phone;
      newBuyer.building_id = createBuyerDto.building_id;
      newBuyer.store_name = createBuyerDto.store_name;
      newBuyer.store_address = createBuyerDto.store_address;
      newBuyer.building_floor = createBuyerDto.building_floor;
      newBuyer.building_section = createBuyerDto.building_section;
      newBuyer.building_room = createBuyerDto.building_room;
      newBuyer.notification_agree = createBuyerDto.notification_agree;
      newBuyer.description = createBuyerDto.description;
      newBuyer.tags = createBuyerDto.tags;
      return await this.buyerRepository.save(newBuyer);
    } catch (e) {
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.buyerRepository.find({
      relations: ['images', 'schedules', 'applys'],
    });
  }

  findOne(id: number) {
    return this.buyerRepository.findOne({
      where: { id },
      relations: ['images', 'schedules', 'applys'],
    });
  }

  findByUid(uid: string) {
    return this.buyerRepository.findOne({
      where: {
        uid,
      },
    });
  }

  async update(id: number, updateBuyerDto: UpdateBuyerDto) {
    try {
      return await this.buyerRepository.update(id, updateBuyerDto);
    } catch (e) {
      return e.driverError?.sqlMessage || e;
    }
  }

  remove(id: number) {
    return this.buyerRepository.delete(id);
  }
}
