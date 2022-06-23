import { Schedule } from './../../schedules/entities/schedule.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from './../../sellers/entities/seller.entity';
export declare class Apply {
    id: number;
    seller: Seller;
    product: Product;
    schedule: Schedule;
    status: number;
}
