import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get()
  async findAll(): Promise<Expense[]> {
    return await this.expenseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Expense> {
    return await this.expenseService.findOne(id);
  }

  @Post()
  async create(@Body() expense: Expense): Promise<Expense> {
    return await this.expenseService.create(expense);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() expense: Expense): Promise<void> {
    await this.expenseService.update(id, expense);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.expenseService.delete(id);
  }
}
