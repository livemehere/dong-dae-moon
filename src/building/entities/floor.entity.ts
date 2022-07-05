import { Buyer } from './../../buyers/entities/buyer.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Building } from './building.entity';

@Entity()
export class Floor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  floor: string;

  @ManyToOne(() => Building, (building) => building.floors)
  building: Building;

  @OneToMany(() => Buyer, (buyer) => buyer.building_floor)
  buyers: Buyer[];
}
