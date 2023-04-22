import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Refund } from '../refund/refund.entity';
import { ExpenseCategory } from '../expense-category/expense-category.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @ManyToOne(() => ExpenseCategory, (category) => category.expenses)
  category: ExpenseCategory;

  @OneToMany(() => Refund, (refund) => refund.expense)
  refunds: Refund[];
}
