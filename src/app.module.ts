import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { VendaModule } from './venda/venda.module';
import { EstoqueModule } from './estoque/estoque.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReposicaoModule } from './reposicao/reposicao.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ProdutosModule,
    VendaModule,
    EstoqueModule,
    UsuariosModule,
    ReposicaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}