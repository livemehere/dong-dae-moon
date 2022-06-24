import { Buyer } from 'src/buyers/entities/buyer.entity';
import { Admin } from './../../admin/entities/admin.entity';
import { Question } from './../../questions/entities/question.entity';
import { Seller } from './../../sellers/entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Buyer, (buyer) => buyer.answers)
  buyer: Buyer;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  questionId: number;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
