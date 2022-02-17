import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryType } from 'src/category/category.type';

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

  @Field(type => CategoryType)
  categoory: string;
}
