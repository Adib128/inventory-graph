import { Field, InputType } from '@nestjs/graphql';
import { Matches, Max, MaxLength, MinLength } from 'class-validator';
import { Index, Unique } from 'typeorm';

@InputType()
export class AuthInput {
  @Field()
  @MinLength(4)
  @MaxLength(32)
  username: string;

  @Field()
  @MinLength(6)
  @MaxLength(32)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: "Password is too weak!"})
  password: string;
}
