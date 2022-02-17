import { Field, ID, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsUUID, MaxLength, MinLength } from "class-validator";

@InputType()
export class ProductInput {
  @Field()
  @MinLength(3)
  @IsNotEmpty()
  productName: string;

  @Field()
  @MinLength(4)
  @MaxLength(4)
  @IsNotEmpty()
  productCode: string;

  @Field()
  reference: string;

  @Field()
  @IsNotEmpty()
  unit: string;

  @Field()
  @IsNotEmpty()
  location: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID('4', { each: true })
  category: string;
}