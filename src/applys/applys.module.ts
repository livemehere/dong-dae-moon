import { Schedule } from './../schedules/entities/schedule.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ApplysService } from './applys.service';
import { ApplysController } from './applys.controller';
import { Apply } from './entities/apply.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apply, Seller, Product, Schedule])],
  controllers: [ApplysController],
  providers: [ApplysService],
})
export class ApplysModule {}
