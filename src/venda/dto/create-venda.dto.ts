import { IsNumber, IsInt, IsPositive } from 'class-validator';

export class CreateVendaDto {
  @IsInt()
  @IsPositive()
  quantidade: number;

  @IsNumber()
  @IsPositive()
  valorUnitario: number;

  @IsNumber()
  @IsPositive()
  valorTotal: number;

  @IsInt()
  @IsPositive()
  produtoId: number;

  @IsInt()
  @IsPositive()
  usuarioId: number;
}
