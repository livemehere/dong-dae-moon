import { Product } from 'src/products/entities/product.entity';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Repository } from 'typeorm';
export declare class SchedulesService {
    private scheduleRepository;
    private productRepository;
    constructor(scheduleRepository: Repository<Schedule>, productRepository: Repository<Product>);
    create(createScheduleDto: CreateScheduleDto): Promise<any>;
    findAll(): Promise<Schedule[]>;
    findOne(id: number): Promise<Schedule>;
    update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
