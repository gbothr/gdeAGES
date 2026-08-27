import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VendaService } from './venda.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { Venda } from '@prisma/client';

@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Get()
  async findAll(): Promise<Venda[]> {
    return await this.vendaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Venda> {
    return await this.vendaService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateVendaDto): Promise<Venda> {
    return await this.vendaService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<CreateVendaDto>): Promise<Venda> {
    return await this.vendaService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Venda> {
    return await this.vendaService.remove(Number(id));
  }
}
