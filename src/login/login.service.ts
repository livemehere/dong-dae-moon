import { Buyer } from './../buyers/entities/buyer.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { LoginDto } from './dto/login.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async login(loginDto: LoginDto) {
    const uid = loginDto.uid;
    const seller = await this.sellerRepository.findOne({ where: { uid } });
    const buyer = await this.buyerRepository.findOne({ where: { uid } });

    if (!seller && !buyer) {
      throw new NotFoundException(
        `There is no seller or buyer with uid(${uid})`,
      );
    }
    if (seller) {
      return seller;
    } else {
      return buyer;
    }
  }

  async loginWithGet(uid: string) {
    const seller = await this.sellerRepository.findOne({ where: { uid } });
    const buyer = await this.buyerRepository.findOne({ where: { uid } });

    if (!seller && !buyer) {
      throw new NotFoundException(
        `There is no seller or buyer with uid(${uid})`,
      );
    }
    if (seller) {
      return seller;
    } else {
      return buyer;
    }
  }
}
