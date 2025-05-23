import { Module } from '@nestjs/common';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';

@Module({
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
