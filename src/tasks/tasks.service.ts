import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }
  deleteTask(id: string): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }
  updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    return this.tasksRepository.updateTaskStatus(id, status);
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }
}
