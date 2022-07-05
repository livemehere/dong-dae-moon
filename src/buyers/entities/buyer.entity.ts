import { Floor } from './../../building/entities/floor.entity';
import { Building } from './../../building/entities/building.entity';
import { Image } from './../../images/entities/image.entity';
import { Answer } from './../../answers/entities/answer.entity';
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
import { Schedule } from '../../schedules/entities/schedule.entity';
import { Apply } from '../../applys/entities/apply.entity';
import { Question } from '../../questions/entities/question.entity';

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

  @Column({ type: 'varchar', length: 255, comment: '비밀번호', select: false })
  password: string;

  @Column({ type: 'varchar', length: 100, comment: '셀러 이름' })
  username: string;

  @Column({ type: 'varchar', length: 30, comment: '전화번호' })
  phone: string;

  @Column({ type: 'text', comment: '사업자 등록증 사진 URL', nullable: true })
  business_registration: string;

  @ManyToOne(() => Building, (building) => building.buyers)
  building: Building;

  @Column({ type: 'varchar', length: 100, comment: '가게 이름' })
  store_name: string;

  @Column({ type: 'varchar', length: 200, comment: '가게 주소' })
  store_address: string;

  // product 에서 합쳐진 부분
  @Column({ type: 'text', comment: '설명' })
  description: string;

  @Column({ type: 'varchar', length: 255, comment: '태그들' })
  tags: string;

  @OneToMany(() => Image, (image) => image.buyer)
  images: Image[];

  @OneToMany(() => Schedule, (schedule) => schedule.buyer)
  schedules: Schedule[];

  @OneToMany(() => Apply, (apply) => apply.buyer)
  applys: Apply[];

  @OneToMany(() => Question, (question) => question.buyer)
  questions: Question[];
  // end --

  // FIXME: 여기 고치기
  // @Column({
  //   type: 'varchar',
  //   length: 200,
  //   comment: '빌딩에서의 가게가 위치한 층',
  // })
  @ManyToOne(() => Floor, (floor) => floor.buyers)
  building_floor: Floor;

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
