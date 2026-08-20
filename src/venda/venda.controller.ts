import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VendaService, Venda } from './venda.service';

@Controller('venda')
export class VendaController {
    constructor(private readonly vendaService: VendaService) {}

    @Get()
    findAll(): Venda[] {
        return this.vendaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Venda | undefined {
        return this.vendaService.findOne(id);
    }

    @Post()
    create(@Body() venda: Omit<Venda, 'id'>): Venda | undefined {
        return this.vendaService.create(venda);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Partial<Venda>): Venda | undefined {
        return this.vendaService.update(id, dados);
    }

    @Delete(':id')
    remove(@Param('id') id: number): void {
        this.vendaService.remove(id);
    }
}
