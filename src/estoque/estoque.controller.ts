import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { Estoque } from '@prisma/client';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Get()
  async findAll(): Promise<Estoque[]> {
    return await this.estoqueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Estoque> {
    return await this.estoqueService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateEstoqueDto): Promise<Estoque> {
    return await this.estoqueService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<CreateEstoqueDto>): Promise<Estoque> {
    return await this.estoqueService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Estoque> {
    return await this.estoqueService.remove(Number(id));
  }
}
