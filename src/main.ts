import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';
// console.log(process.env.STAGE);

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  ); //pipe is used diff ways
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Application listening on port ${3000}`);
}
bootstrap();
