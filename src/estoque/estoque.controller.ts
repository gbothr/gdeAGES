import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EstoqueService, Estoque } from './estoque.service';

@Controller('estoque')
export class EstoqueController {
    constructor(private readonly estoqueService: EstoqueService) {}

    @Get()
    findAll(): Estoque[] {
        return this.estoqueService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number): Estoque | undefined {
        return this.estoqueService.findOne(id);
    }

    @Post()
    create(@Body() estoque: Omit<Estoque, 'id'>): Estoque | undefined {
        return this.estoqueService.create(estoque);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Partial<Estoque>): Estoque | undefined {
        return this.estoqueService.update(id, dados);
    }

    @Delete(':id')
    remove(@Param('id') id: number): void {
        this.estoqueService.remove(id);
    }
}
