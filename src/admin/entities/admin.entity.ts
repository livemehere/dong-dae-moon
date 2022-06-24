import { Answer } from './../../answers/entities/answer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    comment: '이메일',
  })
  email: string;

  @Column({ type: 'varchar', length: 255, comment: '비밀번호' })
  password: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
