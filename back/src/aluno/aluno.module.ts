import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  controllers: [AlunoController],
  providers: [AlunoService]
})
export class AlunoModule {}
