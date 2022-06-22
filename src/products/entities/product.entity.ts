import { Buyer } from 'src/buyers/entities/buyer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', comment: '설명' })
  description: string;

  @Column({ type: 'varchar', length: 255, comment: '태그들' })
  tags: string;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;

  @OneToOne(() => Buyer, {
    cascade: ['remove'],
  })
  @JoinColumn()
  buyer: Buyer;
}
