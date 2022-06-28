import { Buyer } from './../buyers/entities/buyer.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seller, Buyer])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
