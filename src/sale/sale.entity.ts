import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Sale {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @Column()
  saleDate: Date;

  @Column()
  product: string;

  @Column()
  customer: string;
}
