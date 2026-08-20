import { Module } from '@nestjs/common';
import { ReposicaoController } from './reposicao.controller';
import { ReposicaoService } from './reposicao.service';

@Module({
  controllers: [ReposicaoController],
  providers: [ReposicaoService]
})
export class ReposicaoModule {}
