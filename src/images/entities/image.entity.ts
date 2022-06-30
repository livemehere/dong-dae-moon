import { Buyer } from './../../buyers/entities/buyer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  key: string;

  @Column({ comment: 's3 업로드된 localtion url' })
  url: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Buyer, (buyer) => buyer.images)
  buyer: Buyer;
}
