import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Category')
export class CategoryType {
  @Field((type) => ID)
  id: string;

  @Field()
  categoryName: string;
}
