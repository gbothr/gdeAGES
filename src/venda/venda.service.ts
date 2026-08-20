import { Injectable } from '@nestjs/common';

export interface Venda {
    id: number;
    produtoId: number;
    quantidade: number;
    valorUnitario: number;
    valorTotal: number;
    dataVenda: Date;
    usuarioId: number;
}

@Injectable()
export class VendaService {
    private vendas: Venda[] = [];
    
    findAll(): Venda[] {
        return this.vendas;
    }

    findOne(id: number): Venda | undefined {
        return this.vendas.find(venda => venda.id === id);
    }

    create(venda: Omit<Venda, 'id'>): Venda {
        const novaVenda: Venda = { ...venda, id: this.vendas.length + 1 };
        this.vendas.push(novaVenda);
        return novaVenda;
    }
    
    update(id: number, dados: Partial<Venda>): Venda {
        const index = this.vendas.findIndex((v) => v.id === id);
        this.vendas[index] = { ...this.vendas[index], ...dados };
         return this.vendas[index];
     }

     remove(id: number): void {
        this.vendas = this.vendas.filter((v) => v.id !== id);
    }
}
