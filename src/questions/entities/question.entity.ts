import { Answer } from './../../answers/entities/answer.entity';
import { Seller } from './../../sellers/entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.questions)
  product: Product;

  @ManyToOne(() => Seller, (seller) => seller.questions)
  seller: Seller;

  @OneToOne(() => Answer, (answer) => answer.question)
  answer: Answer;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;

  // TODO: answer 관계 추가
}
