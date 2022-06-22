import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
export declare class BuyerService {
    create(createBuyerDto: CreateBuyerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBuyerDto: UpdateBuyerDto): string;
    remove(id: number): string;
}
