
import { IsString, IsNumber, IsBoolean, IsPositive } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  categoria: string;

  @IsNumber()
  @IsPositive()
  precoVenda: number;

  @IsNumber()
  @IsPositive()
  precoCusto: number;

  @IsBoolean()
  precisaReceita: boolean;
}