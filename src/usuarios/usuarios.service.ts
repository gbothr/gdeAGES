import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException(`Usuário ${id} não encontrado`);
    return usuario;
  }

  async create(data: Omit<Usuario, 'id'>): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }

  async update(id: number, data: Partial<Omit<Usuario, 'id'>>): Promise<Usuario> {
    await this.findOne(id); // Valida se existe antes de atualizar
    return this.prisma.usuario.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Usuario> {
    await this.findOne(id); // Valida se existe antes de deletar
    return this.prisma.usuario.delete({ where: { id } });
  }
}
