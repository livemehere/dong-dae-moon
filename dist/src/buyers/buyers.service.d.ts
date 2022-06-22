import { Repository } from 'typeorm';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { Buyer } from './entities/buyer.entity';
export declare class BuyersService {
    private buyerRepository;
    constructor(buyerRepository: Repository<Buyer>);
    create(createBuyerDto: CreateBuyerDto): Promise<any>;
    findAll(): Promise<Buyer[]>;
    findOne(id: number): Promise<Buyer>;
    update(id: number, updateBuyerDto: UpdateBuyerDto): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
