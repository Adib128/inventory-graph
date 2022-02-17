import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CategoryInput {
  @MinLength(3)
  @Field()
  categoryName: string;
}
