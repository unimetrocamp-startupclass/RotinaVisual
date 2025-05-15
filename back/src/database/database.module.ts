// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env',
    }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),
        username: 'admin_core',
        password: 'pacoca',
        database: 'db_postgres',
        autoLoadEntities: true,
        synchronize: true,
        logging: configService.get<string>('DB_LOGGING') === 'true',
        };
      },
      inject: [ConfigService], // Injeta o ConfigService na factory
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}