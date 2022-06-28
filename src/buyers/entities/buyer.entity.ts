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
export class Buyer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  uid: string;

  @Column({
    type: 'varchar',
    default: 'buyer',
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

  @Column({ type: 'text', comment: '사업자 등록증 사진 URL' })
  business_registration: string;

  @Column({ type: 'int', default: 0, comment: '빌딩 ID(참조)' })
  building_id: number;

  @Column({ type: 'varchar', length: 100, comment: '가게 이름' })
  store_name: string;

  @Column({ type: 'varchar', length: 200, comment: '가게 주소' })
  store_address: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: '빌딩에서의 가게가 위치한 층',
  })
  building_floor: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: '층에서 가게가 위치한 섹션',
  })
  building_section: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: '가게의 방 번호',
  })
  building_room: string;

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

  @OneToMany(() => Answer, (answer) => answer.buyer)
  answers: Answer[];

  @Column({ type: 'boolean', comment: '푸시 알림 동의' })
  notification_agree: boolean;

  @CreateDateColumn({ name: 'createdAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
