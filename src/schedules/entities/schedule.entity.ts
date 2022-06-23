import { Apply } from './../../applys/entities/apply.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
