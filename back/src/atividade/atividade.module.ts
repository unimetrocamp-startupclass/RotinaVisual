import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade.controller';
import { AtividadeService } from './atividade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './atividade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atividade])],
  controllers: [AtividadeController],
  providers: [AtividadeService]
})
export class AtividadeModule {}
