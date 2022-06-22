import { Injectable } from '@nestjs/common';
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
    const newBuyer = new Buyer();
    newBuyer.email = createBuyerDto.email;
    newBuyer.password = createBuyerDto.password;
    newBuyer.username = createBuyerDto.username;
    newBuyer.phone = createBuyerDto.phone;
    newBuyer.business_registration = createBuyerDto.business_registration;
    newBuyer.building_id = createBuyerDto.building_id;
    newBuyer.store_name = createBuyerDto.store_name;
    newBuyer.store_address = createBuyerDto.store_address;
    newBuyer.building_floor = createBuyerDto.building_floor;
    newBuyer.building_section = createBuyerDto.building_section;
    newBuyer.building_room = createBuyerDto.building_room;
    newBuyer.notification_agree = createBuyerDto.notification_agree;
    try {
      return await this.buyerRepository.save(newBuyer);
    } catch (e) {
      return e.driverError.sqlMessage;
    }
  }

  findAll() {
    return this.buyerRepository.find();
  }

  findOne(id: number) {
    return this.buyerRepository.findOneBy({ id });
  }

  async update(id: number, updateBuyerDto: UpdateBuyerDto) {
    try {
      return await this.buyerRepository.update(id, updateBuyerDto);
    } catch (e) {
      return e.driverError.sqlMessage;
    }
  }

  remove(id: number) {
    return this.buyerRepository.delete(id);
  }
}
