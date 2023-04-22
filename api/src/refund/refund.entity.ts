import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Expense } from '../expense/expense.entity';

@Entity()
export class Refund {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.refunds)
  user: User;

  @ManyToOne(() => Expense, (expense) => expense.refunds)
  expense: Expense;
}
