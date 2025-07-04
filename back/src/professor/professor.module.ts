import { Module } from '@nestjs/common';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
