import { Test, TestingModule } from '@nestjs/testing';
import { AtividadeController } from './atividade.controller';

describe('AtividadeController', () => {
  let controller: AtividadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtividadeController],
    }).compile();

    controller = module.get<AtividadeController>(AtividadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
