import { Schedule } from './../../schedules/entities/schedule.entity';
import { Seller } from './../../sellers/entities/seller.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Buyer } from '../../buyers/entities/buyer.entity';

@Entity()
export class Apply {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Seller, (seller) => seller.applys, {
    onDelete: 'CASCADE',
  })
  seller: Seller;

  @ManyToOne(() => Buyer, (buyer) => buyer.applys, { onDelete: 'CASCADE' })
  buyer: Buyer;

  @ManyToOne(() => Schedule, (schedule) => schedule.applys, {
    onDelete: 'CASCADE',
  })
  schedule: Schedule;

  @Column({ type: 'tinyint', default: 0 })
  status: number;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
