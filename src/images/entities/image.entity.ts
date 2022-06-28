import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';

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

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
