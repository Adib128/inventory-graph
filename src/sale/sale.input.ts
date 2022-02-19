import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class SaleInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @Field()
  @IsDate()
  @IsNotEmpty()
  saleDate: Date;

  @Field()
  @IsNotEmpty()
  product: string;

  @Field()
  @IsNotEmpty()
  customer: string;
}
