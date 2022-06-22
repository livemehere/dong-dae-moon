import { Buyer } from 'src/buyers/entities/buyer.entity';
import { Image } from 'src/images/entities/image.entity';
export declare class Product {
    id: number;
    description: string;
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    buyer: Buyer;
    images: Image[];
}
