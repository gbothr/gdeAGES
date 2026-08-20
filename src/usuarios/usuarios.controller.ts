import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService, Usuario } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {   
    constructor(private readonly usuariosService: UsuariosService) {}

    @Get()
    findAll(): Usuario[] {
        return this.usuariosService.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number): Usuario | undefined {
        return this.usuariosService.findOne(id);
    }

    @Post()
    create(@Body() usuario: Omit<Usuario, 'id'>): Usuario | undefined {
        return this.usuariosService.create(usuario);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dados: Partial<Usuario>): Usuario | undefined {
        return this.usuariosService.update(id, dados);
    }

    @Delete(':id')
    remove(@Param('id') id: number): void {
        this.usuariosService.remove(id);
    }
}
