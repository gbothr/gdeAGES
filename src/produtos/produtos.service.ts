import { Injectable } from '@nestjs/common';


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
    private produtos: Produto[] = [];

    findAll(): Produto[] {
        return this.produtos;
    }

    findOne(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.id === id);
    }

    create(produto: Omit<Produto, 'id'>): Produto {
        const novoProduto: Produto = { ...produto, id: this.produtos.length + 1 };
        this.produtos.push(novoProduto);
        return novoProduto;
    }
    
    update(id: number, dados: Partial<Produto>): Produto {
        const index = this.produtos.findIndex((p) => p.id === id);
        this.produtos[index] = { ...this.produtos[index], ...dados };
         return this.produtos[index];
     }

    remove(id: number): void {
        this.produtos = this.produtos.filter((p) => p.id !== id);
    }
}
