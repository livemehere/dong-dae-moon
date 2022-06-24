import { Apply } from './../../applys/entities/apply.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.schedules)
  product: Product;

  @Column({ type: 'datetime' })
  date: Date;

  @OneToMany(() => Apply, (apply) => apply.schedule)
  applys: Apply[];
}
