import { Schedule } from './../schedules/entities/schedule.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from './../sellers/entities/seller.entity';
import { Apply } from './entities/apply.entity';
import { CreateApplyDto } from './dto/create-apply.dto';
import { UpdateApplyDto } from './dto/update-apply.dto';
import { Repository } from 'typeorm';
export declare class ApplysService {
    private applyRepository;
    private sellerRepository;
    private productRepository;
    private ScheduleRepository;
    constructor(applyRepository: Repository<Apply>, sellerRepository: Repository<Seller>, productRepository: Repository<Product>, ScheduleRepository: Repository<Schedule>);
    create(createApplyDto: CreateApplyDto): Promise<Apply>;
    findAll(): Promise<Apply[]>;
    findOne(id: number): Promise<Apply>;
    update(id: number, updateApplyDto: UpdateApplyDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
