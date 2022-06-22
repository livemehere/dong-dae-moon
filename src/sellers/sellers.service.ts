import { Inject, Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Repository } from 'typeorm';
import { Seller } from './entities/seller.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SellersService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,
  ) {}
  async create(createSellerDto: CreateSellerDto) {
    const newSeller = new Seller();
    newSeller.email = createSellerDto.email;
    newSeller.password = createSellerDto.password;
    newSeller.username = createSellerDto.username;
    newSeller.phone = createSellerDto.phone;
    newSeller.nickname = createSellerDto.nickname;
    newSeller.region = createSellerDto.region;
    newSeller.agency_name = createSellerDto.agency_name;
    newSeller.notification_agree = createSellerDto.notification_agree;

    try {
      return await this.sellerRepository.save(newSeller);
    } catch (e) {
      return e.driverError.sqlMessage;
    }
  }

  findAll() {
    return this.sellerRepository.find();
  }

  findOne(id: number) {
    return this.sellerRepository.findOneBy({ id });
  }

  async update(id: number, updateSellerDto: UpdateSellerDto) {
    try {
      return await this.sellerRepository.update(id, updateSellerDto);
    } catch (e) {
      return e.driverError.sqlMessage;
    }
  }

  remove(id: number) {
    return this.sellerRepository.delete(id);
  }
}
