import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

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
  quantity: number;

  @Column()
  location: string;

  @Column()
  price: number;

  @Column()
  category: string;
}