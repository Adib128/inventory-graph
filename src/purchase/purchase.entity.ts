import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Purchase {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  quantity: number;

  @Column()
  purchaseDate: Date;

  @Column()
  product: string;
}
