import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async findAll(): Promise<Expense[]> {
    return await this.expenseRepository.find();
  }

  async findOne(id: number): Promise<Expense> {
    return await this.expenseRepository.findOne({ where: { id: id } });
}

  async create(expense: Expense): Promise<Expense> {
    return await this.expenseRepository.save(expense);
  }

  async update(id: number, expense: Expense): Promise<void> {
    await this.expenseRepository.update(id, expense);
  }

  async delete(id: number): Promise<void> {
    await this.expenseRepository.delete(id);
  }
}
