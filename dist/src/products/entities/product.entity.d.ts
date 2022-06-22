import { Buyer } from 'src/buyers/entities/buyer.entity';
export declare class Product {
    id: number;
    description: string;
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    buyer: Buyer;
}
