import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
export declare class SellersController {
    private readonly sellersService;
    constructor(sellersService: SellersService);
    create(createSellerDto: CreateSellerDto): Promise<any>;
    findAll(): Promise<import("./entities/seller.entity").Seller[]>;
    findOne(id: string): Promise<import("./entities/seller.entity").Seller>;
    update(id: string, updateSellerDto: UpdateSellerDto): Promise<any>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
