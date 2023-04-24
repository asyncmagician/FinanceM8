import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategory } from './expenseCategory.entity';
import { ExpenseCategoryController } from './expenseCategory.controller';
import { ExpenseCategoryService } from './expenseCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])],
  providers: [ExpenseCategoryService],
  controllers: [ExpenseCategoryController],
  exports: [ExpenseCategoryService],
})
export class ExpenseCategoryModule {}
