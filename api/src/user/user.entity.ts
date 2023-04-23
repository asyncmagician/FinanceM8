import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Expense } from '../expense/expense.entity';
import { Balance } from '../balance/balance.entity';
import { Refund } from '../refund/refund.entity';
import * as argon2 from 'argon2';

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

  async setPassword(password: string): Promise<void> {
    this.password = await argon2.hash(password);
  }

  @OneToMany(() => Expense, (expense) => expense.user)
  expenses: Expense[];

  @OneToMany(() => Refund, (refund) => refund.user)
  refunds: Refund[];

  @OneToOne(() => Balance, (balance) => balance.user, { eager: true, cascade: true })
  @JoinColumn()
  balance: Balance;
}
