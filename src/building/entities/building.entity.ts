import { Buyer } from './../../buyers/entities/buyer.entity';
import { Floor } from './floor.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buildingName: string;

  @OneToMany(() => Floor, (floor) => floor.building)
  floors: Floor[];

  @OneToMany(() => Buyer, (buyer) => buyer.building)
  buyers: Buyer[];
}
