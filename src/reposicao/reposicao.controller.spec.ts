import { Test, TestingModule } from '@nestjs/testing';
import { ReposicaoController } from './reposicao.controller';

describe('ReposicaoController', () => {
  let controller: ReposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReposicaoController],
    }).compile();

    controller = module.get<ReposicaoController>(ReposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
