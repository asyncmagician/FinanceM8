import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Balance } from './balance.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private balanceRepository: Repository<Balance>,
  ) {}

  async findAll(): Promise<Balance[]> {
    return await this.balanceRepository.find();
  }

  async findOne(id: number): Promise<Balance> {
    return await this.balanceRepository.findOne({ where: { id: id } });
}

  async create(balance: Balance): Promise<Balance> {
    return await this.balanceRepository.save(balance);
  }

  async update(id: number, balance: Balance): Promise<void> {
    await this.balanceRepository.update(id, balance);
  }

  async delete(id: number): Promise<void> {
    await this.balanceRepository.delete(id);
  }
}
