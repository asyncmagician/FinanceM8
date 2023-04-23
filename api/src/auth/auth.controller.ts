import { Controller, Post, Body } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/dto/loginUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const user = await this.authService.validateUser(loginUserDto.email, loginUserDto.password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.authService.generateAccessToken(user);
    return { accessToken };
  }
}
