import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { UserModule } from '../user/user.module';
import { RefundModule } from '../refund/refund.module';
import { ExpenseCategoryModule } from 'src/expenseCategory/expenseCategory.module';
import { ExpenseModule } from '../expense/expense.module';
import { BalanceModule } from '../balance/balance.module';
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    RefundModule,
    ExpenseCategoryModule,
    ExpenseModule,
    BalanceModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
