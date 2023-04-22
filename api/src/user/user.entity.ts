import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Expense } from '../expense/expense.entity';
import { Balance } from '../balance/balance.entity';
import { Refund } from '../refund/refund.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses: Expense[];

  @OneToMany(() => Refund, (refund) => refund.user)
  refunds: Refund[];

  @OneToOne(() => Balance, (balance) => balance.user, { eager: true, cascade: true })
  @JoinColumn()
  balance: Balance;
}
