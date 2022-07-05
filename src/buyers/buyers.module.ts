import { Floor } from './../building/entities/floor.entity';
import { Building } from './../building/entities/building.entity';
import { Buyer } from './entities/buyer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { BuyersController } from './buyers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer, Building, Floor])],
  controllers: [BuyersController],
  providers: [BuyersService],
  exports: [BuyersService],
})
export class BuyersModule {}
