import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthInput } from './auth.input';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid';
import  * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async getUser(username: string): Promise<User>{
      return await this.userRepository.findOne({
        where: {
          username: username
        },
      });
  }

  async cryptPassword(password: string){
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async createUser(authInput: AuthInput): Promise<User> {
    const { username, password } = authInput;
    const user = await this.getUser(username);
    if (user) {
      throw new ConflictException('User already exists');
    } else {
      const hashedPassword = await this.cryptPassword(password);
      const newUser = await this.userRepository.create({
        id: uuid(),
        username,
        password: hashedPassword,
      });
      return await this.userRepository.save(newUser);
    }
  }

  async signIn(authInput: AuthInput): Promise<string>{
    const { username, password } = authInput;
    const user = await this.getUser(username);
    if (user && (await bcrypt.compare(password, user.password))){
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);
      return accessToken ;
    }else{
      throw new UnauthorizedException('Please check your login credentials!');
    }
  }
}
