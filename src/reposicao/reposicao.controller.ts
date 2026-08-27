import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ReposicaoService } from './reposicao.service';
import { CreateReposicaoDto } from './dto/create-reposicao.dto';
import { Reposicao } from '@prisma/client';

@Controller('reposicao')
export class ReposicaoController {
  constructor(private readonly reposicaoService: ReposicaoService) {}

  @Get()
  async findAll(): Promise<Reposicao[]> {
    return await this.reposicaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Reposicao> {
    return await this.reposicaoService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateReposicaoDto): Promise<Reposicao> {
    return await this.reposicaoService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<CreateReposicaoDto>): Promise<Reposicao> {
    return await this.reposicaoService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Reposicao> {
    return await this.reposicaoService.remove(Number(id));
  }
}
