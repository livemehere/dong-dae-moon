import { Apply } from './../../applys/entities/apply.entity';
import { Product } from 'src/products/entities/product.entity';
export declare class Schedule {
    id: number;
    product: Product;
    date: Date;
    applys: Apply[];
}
