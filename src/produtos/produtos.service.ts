import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface Produto {
    id: number;
    nome: string;
    categoria: string;
    precoVenda: number;
    precoCusto: number;
    precisaReceita: boolean;
}

@Injectable()
export class ProdutosService {
    // Em vez de usar: private produtos: Produto[] = [];
    // Nós injetamos a conexão com o Supabase:
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Produto[]> {
        return this.prisma.produto.findMany();
    }

    async findOne(id: number): Promise<Produto | null> {
        return this.prisma.produto.findUnique({
            where: { id: Number(id) },
        });
    }

    async create(produto: Omit<Produto, 'id'>): Promise<Produto> {
        return this.prisma.produto.create({
            data: produto,
        });
    }
    
    async update(id: number, dados: Partial<Produto>): Promise<Produto> {
        return this.prisma.produto.update({
            where: { id: Number(id) },
            data: dados,
        });
    }

    async remove(id: number): Promise<Produto> {
        return this.prisma.produto.delete({
            where: { id: Number(id) },
        });
    }
}