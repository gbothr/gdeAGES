import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutosService, Produto } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) {}

    @Get()
    findAll(): Produto[] {
        return this.produtosService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number): Produto | undefined {
        return this.produtosService.findOne(id);
    }

    @Post()
    create(@Body() produto: Omit<Produto, 'id'>): Produto | undefined {
        return this.produtosService.create(produto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Partial<Produto>): Produto | undefined {
        return this.produtosService.update(id, dados);
    }

    @Delete(':id')
    remove(@Param('id') id: number): void {
        this.produtosService.remove(id);
    }
}
