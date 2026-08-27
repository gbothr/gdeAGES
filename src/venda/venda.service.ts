import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Venda } from '@prisma/client';

@Injectable()
export class VendaService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Venda[]> {
    return this.prisma.venda.findMany({ include: { produto: true, usuario: true } });
  }

  async findOne(id: number): Promise<Venda> {
    const venda = await this.prisma.venda.findUnique({ where: { id }, include: { produto: true, usuario: true } });
    if (!venda) throw new NotFoundException(`Venda ${id} não encontrada`);
    return venda;
  }

  async create(data: Omit<Venda, 'id' | 'dataVenda'>): Promise<Venda> {
    return this.prisma.venda.create({ data });
  }

  async update(id: number, data: Partial<Omit<Venda, 'id'>>): Promise<Venda> {
    await this.findOne(id);
    return this.prisma.venda.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Venda> {
    await this.findOne(id);
    return this.prisma.venda.delete({ where: { id } });
  }
}
