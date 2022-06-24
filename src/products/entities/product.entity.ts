import { Question } from './../../questions/entities/question.entity';
import { Apply } from './../../applys/entities/apply.entity';
import { Schedule } from './../../schedules/entities/schedule.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Buyer } from '../../buyers/entities/buyer.entity';
import { Image } from '../../images/entities/image.entity';

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

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  @OneToMany(() => Schedule, (schedule) => schedule.product)
  schedules: Schedule[];

  @OneToMany(() => Apply, (apply) => apply.product)
  applys: Apply[];

  @OneToMany(() => Question, (question) => question.product)
  questions: Question[];
}
