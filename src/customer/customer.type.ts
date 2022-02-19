import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Customer')
export class CustomerType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  address: string;
}
