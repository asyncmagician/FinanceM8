import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { UserModule } from '../user/user.module';
// import { BalanceModule } from '../balance/balance.module';
// import { ExpenseModule } from '../expense/expense.module';
// import { ExpenseCategoryModule } from '../expense-category/expense-category.module';
// import { RefundModule } from '../refund/refund.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
