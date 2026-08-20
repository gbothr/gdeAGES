import { Injectable } from '@nestjs/common';

export enum Role {
  ADMIN = 'admin',
  FARMACEUTICO  = 'farmaceutico',
  CAIXA = 'caixa',
}

export interface Usuario {
    id: number;
    nome: string;
    role: Role;
    cpf: string;
    senha: string;
}
@Injectable()
export class UsuariosService {
    private usuarios: Usuario[] = [];

    findAll(): Usuario[] {
        return this.usuarios;
    }
    
    findOne(id: number): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    create(usuario: Omit<Usuario, 'id'>): Usuario {
        const novoUsuario: Usuario = { ...usuario, id: this.usuarios.length + 1 };
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }
    
    update(id: number, dados: Partial<Usuario>): Usuario {
        const index = this.usuarios.findIndex((u) => u.id === id);
        this.usuarios[index] = { ...this.usuarios[index], ...dados };
         return this.usuarios[index];
     }

    remove(id: number): void {
        this.usuarios = this.usuarios.filter((u) => u.id !== id);
    }

}
