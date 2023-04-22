import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategory } from './expense-category.entity';
import { ExpenseCategoryController } from './expense-category.controller';
import { ExpenseCategoryService } from './expense-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])],
  providers: [ExpenseCategoryService],
  controllers: [ExpenseCategoryController],
  exports: [ExpenseCategoryService],
})
export class ExpenseCategoryModule {}
