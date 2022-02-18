import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from 'src/product/product.type';

@ObjectType('Purchase')
export class PurchaseType {
  @Field((type) => ID)
  id: string;

  @Field()
  quantity: number;

  @Field()
  purchaseDate: Date;

  @Field((type) => ProductType)
  product: string;
}
