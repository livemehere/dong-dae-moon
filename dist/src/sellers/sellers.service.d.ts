import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Repository } from 'typeorm';
import { Seller } from './entities/seller.entity';
export declare class SellersService {
    private sellerRepository;
    constructor(sellerRepository: Repository<Seller>);
    create(createSellerDto: CreateSellerDto): Promise<any>;
    findAll(): Promise<Seller[]>;
    findOne(id: number): Promise<Seller>;
    update(id: number, updateSellerDto: UpdateSellerDto): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
