import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Reposicao } from '@prisma/client';

@Injectable()
export class ReposicaoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Reposicao[]> {
    return this.prisma.reposicao.findMany({ include: { produto: true } });
  }

  async findOne(id: number): Promise<Reposicao> {
    const reposicao = await this.prisma.reposicao.findUnique({ where: { id }, include: { produto: true } });
    if (!reposicao) throw new NotFoundException(`Reposição ${id} não encontrada`);
    return reposicao;
  }

  async create(data: Omit<Reposicao, 'id' | 'dataReposicao'>): Promise<Reposicao> {
    return this.prisma.reposicao.create({
      data: {
        ...data,
        dataReposicao: new Date(),
      },
    });
  }

  async update(id: number, data: Partial<Omit<Reposicao, 'id'>>): Promise<Reposicao> {
    await this.findOne(id);
    return this.prisma.reposicao.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Reposicao> {
    await this.findOne(id);
    return this.prisma.reposicao.delete({ where: { id } });
  }
}
