import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {
  // basic docker commands is on the text file, good thing to be familiar with docker
  // there are 3 kinds of pipes global, handler level, parameter level
  // how to use them see documentation or first video of pipe
  // how to create custom in pipe? documentation
  // documentation is well structured and better then tutorial to understand
}
