import { Answer } from './../../answers/entities/answer.entity';
import { Seller } from './../../sellers/entities/seller.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Buyer } from '../../buyers/entities/buyer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Buyer, (buyer) => buyer.questions, {
    onDelete: 'CASCADE',
  })
  buyer: Buyer;

  @ManyToOne(() => Seller, (seller) => seller.questions, {
    onDelete: 'CASCADE',
  })
  seller: Seller;

  @OneToOne(() => Answer, { cascade: ['insert'] })
  @JoinColumn()
  answer: Answer;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
