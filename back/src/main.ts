import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Transforma o payload para o tipo do DTO (ex: string para number)
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
