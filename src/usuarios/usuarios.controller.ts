import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from '@prisma/client';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario> {
    return await this.usuariosService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateUsuarioDto): Promise<Usuario> {
    return await this.usuariosService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<CreateUsuarioDto>): Promise<Usuario> {
    return await this.usuariosService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Usuario> {
    return await this.usuariosService.remove(Number(id));
  }
}
