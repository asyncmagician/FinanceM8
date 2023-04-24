import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('expenses')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Expense[]> {
    return await this.expenseService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<Expense> {
    return await this.expenseService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() expense: Expense): Promise<Expense> {
    return await this.expenseService.create(expense);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() expense: Expense): Promise<void> {
    await this.expenseService.update(id, expense);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    await this.expenseService.delete(id);
  }
}
