import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
export declare class BuyersController {
    private readonly buyersService;
    constructor(buyersService: BuyersService);
    create(createBuyerDto: CreateBuyerDto): Promise<import("./entities/buyer.entity").Buyer>;
    findAll(): Promise<import("./entities/buyer.entity").Buyer[]>;
    findOne(id: string): Promise<import("./entities/buyer.entity").Buyer>;
    update(id: string, updateBuyerDto: UpdateBuyerDto): Promise<any>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
