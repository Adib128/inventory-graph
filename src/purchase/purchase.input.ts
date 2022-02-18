import { Field, InputType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class PurchaseInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @Field()
  @IsDate()
  @IsNotEmpty()
  purchaseDate: Date;

  @Field()
  @IsNotEmpty()
  product: string;
}