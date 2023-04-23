import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import * as argon2 from 'argon2';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOneByEmail(email);

    if (user && await argon2.verify(user.password, password)) {
      return user;
    }

    return null;
  }

  async generateAccessToken(user: User): Promise<string> {
    const payload = { sub: user.id, email: user.email };
    const secret = this.configService.get<string>('jwtSecret');
    const token = await jwt.sign(payload, secret);
    return token;
  }
}
