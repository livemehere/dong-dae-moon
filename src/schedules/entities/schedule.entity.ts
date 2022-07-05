import { Buyer } from './../../buyers/entities/buyer.entity';
import { Apply } from './../../applys/entities/apply.entity';
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

  @ManyToOne(() => Buyer, (buyer) => buyer.schedules)
  buyer: Buyer;

  @Column({ default: false })
  iscomfirm: boolean;

  @Column({ type: 'datetime' })
  start_date: Date;

  @Column({ type: 'datetime' })
  end_date: Date;

  @OneToMany(() => Apply, (apply) => apply.schedule)
  applys: Apply[];
}
