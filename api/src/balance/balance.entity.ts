import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  current: number;

  @Column()
  saving: number; 

  @Column()
  lastUpdated: Date;
  

  @OneToOne(() => User, (user) => user.balance)
  user: User;
}
