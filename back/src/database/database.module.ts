// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Importe o ConfigModule para usar o ConfigService
    // Certifique-se de que ConfigModule.forRoot() está em seu AppModule globalmente ou aqui
    ConfigModule.forRoot({ 
      isGlobal: true, // Ou configure conforme sua necessidade
      envFilePath: '.env', // Especifica o arquivo .env
    }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa o ConfigModule para a factory
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: configService.get<string>('DB_SYNCHRONIZE') === 'true', // Converte string para boolean
        logging: configService.get<string>('DB_LOGGING') === 'true', // Converte string para boolean
      }),
      inject: [ConfigService], // Injeta o ConfigService na factory
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}