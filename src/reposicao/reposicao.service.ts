import { Injectable } from '@nestjs/common';

export interface Reposicao {
    id: number;
    quantidade: number;
    produtoId: number;
    valorUnitario: number;
    valorTotal: number;
    fornecedor: string;
    dataReposicao: Date;
}

@Injectable()
export class ReposicaoService {
    private reposicoes: Reposicao[] = [];

    findAll(): Reposicao[] {
        return this.reposicoes;
    }

    findOne(id: number): Reposicao | undefined {
        return this.reposicoes.find(reposicao => reposicao.id === id);
    }

    create(reposicao: Omit<Reposicao, 'id'>): Reposicao {
        const novaReposicao: Reposicao = { ...reposicao, id: this.reposicoes.length + 1 };
        this.reposicoes.push(novaReposicao);
        return novaReposicao;
    }

    update(id: number, dados: Partial<Reposicao>): Reposicao {
        const index = this.reposicoes.findIndex((r) => r.id === id);
        this.reposicoes[index] = { ...this.reposicoes[index], ...dados };
         return this.reposicoes[index];
     }

    remove(id: number): void {
        this.reposicoes = this.reposicoes.filter((r) => r.id !== id);
    }

}
