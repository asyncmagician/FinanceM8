import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExpenseCategoryService } from './expenseCategory.service';
import { ExpenseCategory } from './expenseCategory.entity';

@Controller('categories')
export class ExpenseCategoryController {
  constructor(private expenseCategoryService: ExpenseCategoryService) {}

  @Get()
  async findAll(): Promise<ExpenseCategory[]> {
    return await this.expenseCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ExpenseCategory> {
    return await this.expenseCategoryService.findOne(id);
  }

  @Post()
  async create(@Body() expenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
    return await this.expenseCategoryService.create(expenseCategory);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() expenseCategory: ExpenseCategory): Promise<void> {
    await this.expenseCategoryService.update(id, expenseCategory);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.expenseCategoryService.delete(id);
  }
}
