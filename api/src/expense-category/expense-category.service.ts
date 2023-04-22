import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseCategory } from './expense-category.entity';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private expenseCategoryRepository: Repository<ExpenseCategory>,
  ) {}

  async findAll(): Promise<ExpenseCategory[]> {
    return await this.expenseCategoryRepository.find();
  }

  async findOne(id: number): Promise<ExpenseCategory> {
    return await this.expenseCategoryRepository.findOne({ where: { id: id } });
}

  async create(expenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
    return await this.expenseCategoryRepository.save(expenseCategory);
  }

  async update(id: number, expenseCategory: ExpenseCategory): Promise<void> {
    await this.expenseCategoryRepository.update(id, expenseCategory);
  }

  async delete(id: number): Promise<void> {
    await this.expenseCategoryRepository.delete(id);
  }
}
