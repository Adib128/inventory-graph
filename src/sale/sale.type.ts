import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CustomerType } from 'src/customer/customer.type';
import { ProductType } from 'src/product/product.type';

@ObjectType('Sale')
export class SaleType {
  @Field((type) => ID)
  id: string;

  @Field()
  quantity: number;

  @Field()
  saleDate: Date;

  @Field((type) => ProductType)
  product: string;

  @Field((type) => CustomerType)
  customer: string;
}
