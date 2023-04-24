import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ExpenseCategoryService } from './expenseCategory.service';
import { ExpenseCategory } from './expenseCategory.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class ExpenseCategoryController {
  constructor(private expenseCategoryService: ExpenseCategoryService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<ExpenseCategory[]> {
    return await this.expenseCategoryService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<ExpenseCategory> {
    return await this.expenseCategoryService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() expenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
    return await this.expenseCategoryService.create(expenseCategory);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(@Param('id') id: number, @Body() expenseCategory: ExpenseCategory): Promise<void> {
    await this.expenseCategoryService.update(id, expenseCategory);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number): Promise<void> {
    await this.expenseCategoryService.delete(id);
  }
}
