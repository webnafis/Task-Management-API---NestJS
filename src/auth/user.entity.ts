import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true }) //error for this happens when try  to save in repository, use try catch there
  username: string;

  @Column()
  password: string;

  // eager true means tasks will be automatically fetched when user data fetched
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
