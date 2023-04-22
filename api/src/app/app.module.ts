import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { UserModule } from '../user/user.module';
import { RefundModule } from '../refund/refund.module';
import { ExpenseCategoryModule } from 'src/expense-category/expense-category.module';
// import { BalanceModule } from '../balance/balance.module';
// import { ExpenseModule } from '../expense/expense.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    RefundModule,
    ExpenseCategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
