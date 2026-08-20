import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { VendaService } from './venda/venda.service';
import { VendaController } from './venda/venda.controller';
import { VendaModule } from './venda/venda.module';
import { EstoqueModule } from './estoque/estoque.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReposicaoModule } from './reposicao/reposicao.module';

@Module({
  imports: [ProdutosModule, VendaModule, EstoqueModule, UsuariosModule, ReposicaoModule],
  controllers: [AppController, VendaController],
  providers: [AppService, VendaService],
})
export class AppModule {}
