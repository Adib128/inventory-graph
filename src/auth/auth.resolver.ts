import { Req } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthInput } from './auth.input';
import { AuthService } from './auth.service';
import { UserType } from './auth.type';
import { loginUserType } from './login-user.type';

@Resolver((of) => UserType)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation((returns) => UserType)
  async signup(@Args('authInput') authInput: AuthInput) {
    return this.authService.createUser(authInput);
  }

  @Mutation((returns) => loginUserType)
  async signin(@Args('authInput') authInput: AuthInput) {
    return {
      accessToken: await this.authService.signIn(authInput),
    };
  }
}
