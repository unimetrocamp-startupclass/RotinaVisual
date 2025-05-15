import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades que não estão no DTO (segurança)
      forbidNonWhitelisted: true, // Lança um erro se propriedades não permitidas forem enviadas
      transform: true, // Transforma o payload para o tipo do DTO (ex: string para number)
      transformOptions: {
        enableImplicitConversion: true, // Permite conversão implícita de tipos (útil com query params)
      },
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
