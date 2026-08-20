import { Injectable } from '@nestjs/common';

export interface Estoque{
    id: number;
    produtoId: number;
    quantidadeAtual: number;
    quantidadeMinima: number;
    lote: string;
    validade: Date;
}

@Injectable()
export class EstoqueService {
    private estoque: Estoque[] = [];

    findAll(): Estoque[] {
        return this.estoque;
    }

    findOne(id: number): Estoque | undefined {
        return this.estoque.find(estoque => estoque.id === id);
    }

    create(estoque: Omit<Estoque, 'id'>): Estoque {
        const novoEstoque: Estoque = { ...estoque, id: this.estoque.length + 1 };
        this.estoque.push(novoEstoque);
        return novoEstoque;
    }

    update(id: number, dados: Partial<Estoque>): Estoque {
        const index = this.estoque.findIndex((e) => e.id === id);
        this.estoque[index] = { ...this.estoque[index], ...dados };
         return this.estoque[index];
     }
     
    remove(id: number): void {
        this.estoque = this.estoque.filter((e) => e.id !== id);
    }

}
