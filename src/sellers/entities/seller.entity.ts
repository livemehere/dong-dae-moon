import { Question } from './../../questions/entities/question.entity';
import { Apply } from './../../applys/entities/apply.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    default: 'seller',
    length: 100,
    comment: 'seller | buyer',
  })
  userType: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    comment: '이메일',
  })
  email: string;

  @Column({ type: 'varchar', length: 255, comment: '비밀번호' })
  password: string;

  @Column({ type: 'varchar', length: 100, comment: '셀러 이름' })
  username: string;

  @Column({ type: 'varchar', length: 30, comment: '전화번호' })
  phone: string;

  @Column({ type: 'varchar', length: 100, unique: true, comment: '닉네임' })
  nickname: string;

  @Column({ type: 'varchar', length: 100, comment: '지역' })
  region: string;

  @Column({ type: 'varchar', length: 100, comment: '상호명' })
  agency_name: string;

  @Column({ type: 'int', default: 0, comment: '랭크(권한 용도로 사용)' })
  rank: number;

  @Column({ type: 'text', nullable: true, comment: 'FCM 토큰' })
  fcm_token: string;

  @Column({
    type: 'datetime',
    name: 'latest_active',
    default: null,
    comment: '최근 라이브 신청 날짜',
  })
  latest_active: Date;

  @Column({ type: 'boolean', comment: '푸시 알림 동의' })
  notification_agree: boolean;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;

  @OneToMany(() => Apply, (apply) => apply.seller)
  applys: Apply[];

  @OneToMany(() => Question, (question) => question.seller)
  questions: Question[];
}
