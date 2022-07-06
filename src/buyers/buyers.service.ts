import { Floor } from './../building/entities/floor.entity';
import { CreateBuildingDto } from './../building/dto/create-building.dto';
import { Building } from './../building/entities/building.entity';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Not, Repository } from 'typeorm';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { Buyer } from './entities/buyer.entity';

@Injectable()
export class BuyersService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,

    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,

    @InjectRepository(Floor)
    private floorRepository: Repository<Floor>,
  ) {}

  async create(createBuyerDto: CreateBuyerDto) {
    const building = await this.buildingRepository.findOne({
      where: {
        id: createBuyerDto.building_id,
      },
    });

    if (!building)
      throw new BadRequestException(
        `building id(${createBuyerDto.building_id}) is not exists`,
      );

    const floor = await this.floorRepository.findOne({
      where: {
        id: createBuyerDto.building_floor_id,
      },
    });

    if (!floor)
      throw new BadRequestException(
        `floor id(${createBuyerDto.building_floor_id}) is not exists`,
      );

    try {
      const newBuyer = new Buyer();
      newBuyer.uid = createBuyerDto.uid;
      newBuyer.email = createBuyerDto.email;
      newBuyer.password = createBuyerDto.password;
      newBuyer.username = createBuyerDto.username;
      newBuyer.phone = createBuyerDto.phone;
      newBuyer.building = building;
      newBuyer.store_name = createBuyerDto.store_name;
      newBuyer.store_address = createBuyerDto.store_address;
      newBuyer.building_floor = floor;
      newBuyer.building_section = createBuyerDto.building_section;
      newBuyer.building_room = createBuyerDto.building_room;
      newBuyer.notification_agree = createBuyerDto.notification_agree;
      newBuyer.description = createBuyerDto.description;
      newBuyer.tags = createBuyerDto.tags;
      return await this.buyerRepository.save(newBuyer);
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e.driverError.sqlMessage || e);
    }
  }

  findAll() {
    return this.buyerRepository.find({
      relations: [
        'images',
        'schedules',
        'applys',
        'building',
        'building_floor',
      ],
    });
  }

  search(query: any) {
    const word = query.word;

    if (!word) throw new BadRequestException('word not be Empty');

    return this.buyerRepository.find({
      where: [
        {
          store_name: Like(`%${word}%`),
        },
        { tags: Like(`%${word}%`) },
        { store_address: Like(`%${word}%`) },
        { description: Like(`%${word}%`) },
      ],
      relations: [
        'images',
        'schedules',
        'applys',
        'building',
        'building_floor',
      ],
    });
  }

  findOne(id: number) {
    return this.buyerRepository.findOne({
      where: {
        id,
      },
      relations: [
        'images',
        'schedules',
        'applys',
        'building',
        'building_floor',
      ],
    });
  }

  findByUid(uid: string) {
    return this.buyerRepository.findOne({
      where: {
        uid,
      },
      relations: [
        'images',
        'schedules',
        'applys',
        'building',
        'building_floor',
      ],
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
