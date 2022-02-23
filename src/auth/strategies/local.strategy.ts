import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from '../user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(payload: any): Promise<User> {
    const username = payload.username;
    const user = await this.authService.getUser(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}