import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  productName: string;

  @Column()
  productCode: string;

  @Column()
  reference: string;

  @Column()
  unit: string;

  @Column()
  location: string;

  @Column()
  price: number;
}