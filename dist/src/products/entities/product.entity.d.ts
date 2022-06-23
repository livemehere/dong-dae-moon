import { Apply } from './../../applys/entities/apply.entity';
import { Schedule } from './../../schedules/entities/schedule.entity';
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
    schedules: Schedule[];
    applys: Apply[];
}
