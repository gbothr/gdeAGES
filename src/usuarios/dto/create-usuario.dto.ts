import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEnum(Role)
  role: Role;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
