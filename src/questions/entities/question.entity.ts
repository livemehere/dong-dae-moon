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
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.questions, {
    cascade: true,
  })
  product: Product;

  @ManyToOne(() => Seller, (seller) => seller.questions)
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
