import { IsNumber, IsInt, IsPositive, IsString, IsNotEmpty } from 'class-validator';

export class CreateReposicaoDto {
  @IsInt()
  @IsPositive()
  quantidade: number;

  @IsNumber()
  @IsPositive()
  valorUnitario: number;

  @IsNumber()
  @IsPositive()
  valorTotal: number;

  @IsString()
  @IsNotEmpty()
  fornecedor: string;

  @IsInt()
  @IsPositive()
  produtoId: number;
}
