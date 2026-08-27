import { IsInt, IsPositive, IsString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEstoqueDto {
  @IsInt()
  quantidadeAtual: number;

  @IsInt()
  quantidadeMinima: number;

  @IsString()
  @IsNotEmpty()
  lote: string;

  @Type(() => Date)
  validade: Date;

  @IsInt()
  @IsPositive()
  produtoId: number;
}
