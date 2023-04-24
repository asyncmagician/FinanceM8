import { Controller, Get, Post, Put, Delete, Param, Body, Res, HttpStatus, HttpException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ResponseHeader } from '../interfaces/responseHeader';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../dto/userDto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Res() res: Response): Promise<void> {
    try {
      const users = await this.userService.findAll();

      const header = new ResponseHeader('success', '/users', 'The operation was successful.', 200);

      res.status(200).json({ header, body: users });
    } catch (error) {
      const header = new ResponseHeader('error', '/users', error.message, HttpStatus.INTERNAL_SERVER_ERROR);

      if (error.status === HttpStatus.NOT_FOUND) {
        throw new HttpException({ header, body: [] }, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException({ header, body: [] }, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() user: User): Promise<void> {
    await this.userService.update(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    await this.userService.delete(id);
  }
}
