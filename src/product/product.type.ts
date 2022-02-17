import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductType {
  @Field((type) => ID)
  id: string;

  @Field()
  productName: string;

  @Field()
  productCode: string;

  @Field({ nullable: true })
  reference: string;

  @Field()
  unit: string;

  @Field()
  location: string;

  @Field()
  price: number;
}
