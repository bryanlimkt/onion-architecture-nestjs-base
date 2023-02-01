import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IOffer } from '../../domain/model/offer.interface';
import { BaseEntity } from './base.entity';

@Entity()
export class Offer extends BaseEntity implements IOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;
}
