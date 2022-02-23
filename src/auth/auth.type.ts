import { Field, ObjectType, ID } from "@nestjs/graphql";

@ObjectType('User')
export class UserType{
    @Field(type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    password: string;
}