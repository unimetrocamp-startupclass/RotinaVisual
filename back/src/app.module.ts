import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { AtividadeModule } from './atividade/atividade.module';
import { DatabaseModule } from './database/database.module';
import { ResponsavelModule } from './responsavel/responsavel.module';

@Module({
  imports: [
    AlunoModule,
    ProfessorModule,
    AtividadeModule,
    DatabaseModule,
    DatabaseModule,
    ResponsavelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
