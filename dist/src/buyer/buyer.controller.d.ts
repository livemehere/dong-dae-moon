import { BuyerService } from './buyer.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
export declare class BuyerController {
    private readonly buyerService;
    constructor(buyerService: BuyerService);
    create(createBuyerDto: CreateBuyerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBuyerDto: UpdateBuyerDto): string;
    remove(id: string): string;
}
