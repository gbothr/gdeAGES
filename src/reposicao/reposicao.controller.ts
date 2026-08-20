import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReposicaoService, Reposicao } from './reposicao.service';

@Controller('reposicao')
export class ReposicaoController {
    constructor(private readonly reposicaoService: ReposicaoService) {}
    
    @Get()
    findAll(): Reposicao[] {
        return this.reposicaoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Reposicao | undefined {
        return this.reposicaoService.findOne(id);
    }
    
    @Post()
    create(@Body() reposicao: Omit<Reposicao, 'id'>): Reposicao | undefined {
        return this.reposicaoService.create(reposicao);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Partial<Reposicao>): Reposicao | undefined {
        return this.reposicaoService.update(id, dados);
    }
    
    @Delete(':id')
    remove(@Param('id') id: number): void {
        this.reposicaoService.remove(id);
    }
}
