import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
  import { Expense } from '../expense/expense.entity';
  
  @Entity()
  export class ExpenseCategory {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    type: string;
  
    @OneToMany(() => Expense, (expense) => expense.category)
    expenses: Expense[];
  }
  