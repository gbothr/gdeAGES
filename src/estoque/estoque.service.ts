import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Estoque } from '@prisma/client';

@Injectable()
export class EstoqueService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Estoque[]> {
    return this.prisma.estoque.findMany({ include: { produto: true } });
  }

  async findOne(id: number): Promise<Estoque> {
    const estoque = await this.prisma.estoque.findUnique({ where: { id }, include: { produto: true } });
    if (!estoque) throw new NotFoundException(`Estoque ${id} não encontrado`);
    return estoque;
  }

  async create(data: Omit<Estoque, 'id'>): Promise<Estoque> {
    return this.prisma.estoque.create({ data });
  }

  async update(id: number, data: Partial<Omit<Estoque, 'id'>>): Promise<Estoque> {
    await this.findOne(id);
    return this.prisma.estoque.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Estoque> {
    await this.findOne(id);
    return this.prisma.estoque.delete({ where: { id } });
  }
}
