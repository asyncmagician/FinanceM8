import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/userDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }
  

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id: id } });
}


async create(createUserDto: CreateUserDto): Promise<User> {
  const hashedPassword = await argon2.hash(createUserDto.password);
  const newUser = this.userRepository.create({
    ...createUserDto,
    password: hashedPassword,
  });
  return await this.userRepository.save(newUser);
}


  async update(id: number, updatedUser: User): Promise<void> {
    if (updatedUser.password) {
      updatedUser.password = await argon2.hash(updatedUser.password);
    }
    await this.userRepository.update(id, updatedUser);
  }



  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
