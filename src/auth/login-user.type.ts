import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class loginUserType {
  @Field()
  accessToken: string;
}
