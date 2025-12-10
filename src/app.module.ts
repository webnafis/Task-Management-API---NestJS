import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
// console.log(process.env.STAGE);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // useFactory: async (configService: ConfigService) => {
      //   return {
      //     type: 'postgres',
      //     host: configService.get('DB_HOST'),
      //     port: configService.get('DB_PORT'),
      //     username: configService.get('DB_USERNAME'),
      //     password: configService.get('DB_PASSWORD'),
      //     database: configService.get('DB_NAME'),
      //     autoLoadEntities: true,
      //     synchronize: true,
      //   };
      // },
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    AuthModule,
  ],
})
export class AppModule {
  //
  // basic docker commands is on the text file, good thing to be familiar with docker
  // there are 3 kinds of pipes global, handler level, parameter level
  // how to use them see documentation or first video of pipe
  // how to create custom in pipe? documentation
  // documentation is well structured and better then tutorial to understand
}
