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
    newSeller.rank = createSellerDto.rank;
    newSeller.notification_agree = createSellerDto.notification_agree;
    return await this.sellerRepository.save(newSeller);
  }

  findAll() {
    return this.sellerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} seller`;
  }

  update(id: number, updateSellerDto: UpdateSellerDto) {
    return `This action updates a #${id} seller`;
  }

  remove(id: number) {
    return `This action removes a #${id} seller`;
  }
}
