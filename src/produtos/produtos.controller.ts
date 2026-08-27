import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from '@prisma/client';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  async findAll(): Promise<Produto[]> {
    return await this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Produto | null> { 
    return await this.produtosService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateProdutoDto): Promise<Produto> {
    return await this.produtosService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateProdutoDto>, 
  ): Promise<Produto> {
    return await this.produtosService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Produto> {
    return await this.produtosService.remove(Number(id));
  }
}