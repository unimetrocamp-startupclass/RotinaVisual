import { Test, TestingModule } from '@nestjs/testing';
import { AtividadeService } from './atividade.service';

describe('AtividadeService', () => {
  let service: AtividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtividadeService],
    }).compile();

    service = module.get<AtividadeService>(AtividadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
