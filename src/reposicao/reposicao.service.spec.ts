import { Test, TestingModule } from '@nestjs/testing';
import { ReposicaoService } from './reposicao.service';

describe('ReposicaoService', () => {
  let service: ReposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReposicaoService],
    }).compile();

    service = module.get<ReposicaoService>(ReposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
