import { CreateRoomDto } from './dto/create-room.dto';
import { Building } from './entities/building.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Repository } from 'typeorm';
import { Floor } from './entities/floor.entity';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private buildingRepository: Repository<Building>,

    @InjectRepository(Floor)
    private floorRepository: Repository<Floor>,
  ) {}

  async create(createBuildingDto: CreateBuildingDto) {
    console.log(createBuildingDto);
    return 'This action adds a new building';
  }

  // async addRooms(createRoomDto: CreateRoomDto) {
  //   const result = [];
  //   const { floorId, rooms } = createRoomDto;
  //   console.log(floorId, rooms); //rooms[0] 첫층, rooms[1] 마지막 층

  //   const totalFloorCnt = parseInt(rooms[1]);
  //   const baseFloor = Number(rooms[0]);

  //   const floor = await this.floorRepository.findOne({
  //     where: { id: floorId },
  //   });

  //   if (!floor)
  //     throw new BadRequestException(`존재하지 않는 층(${floorId}) 입니다`);

  //   for (let i = baseFloor; i <= totalFloorCnt; i++) {
  //     const room = new Room();
  //     room.floor = floor;
  //     room.name = `${i}호`;
  //     result.push(await this.roomRepository.save(room));
  //   }

  //   return result;
  // }

  findAll() {
    return this.buildingRepository.find({
      relations: ['floors'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
