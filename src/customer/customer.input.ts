import { Field, ID, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsUUID, MaxLength, MinLength } from "class-validator";

@InputType()
export class CustomerInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6)
  phoneNumber: string;

  @Field()
  address: string;
}