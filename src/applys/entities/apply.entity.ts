import { Schedule } from './../../schedules/entities/schedule.entity';
import { Seller } from './../../sellers/entities/seller.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Apply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Seller, (seller) => seller.applys)
  seller: Seller;

  @ManyToOne(() => Product, (product) => product.applys)
  product: Product;

  @ManyToOne(() => Schedule, (schedule) => schedule.applys)
  schedule: Schedule;

  @Column({ type: 'tinyint', default: 0 })
  status: number;
}
