import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsOptional,
  IsEnum,
  IsDateString,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export enum DivergenciaEnum {
  AUTISMO = 'Autismo',
  SINDROME_DOWN = 'Síndrome de down',
  TDAH = 'TDAH',
  OUTRO = 'Outro',
  NENHUMA = 'Nenhuma',
}

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly sobrenome: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(11)
  @MaxLength(11)
  readonly cpf: number;

  @IsNotEmpty()
  @IsNumber()
  readonly ra: number;

  @IsOptional()
  @IsDateString()
  readonly data_nascimento?: string | Date | null;
  
  /*
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  readonly telefone_pais?: string;
  */

  @IsNotEmpty()
  readonly responsavelID: number;

  /*
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  */

  @IsOptional()
  @IsEnum(DivergenciaEnum)
  readonly divergencia?: DivergenciaEnum | null;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  readonly medicacao?: string | null;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
  readonly senha: string;

  @IsOptional()
  @IsBoolean()
  readonly ativo?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  readonly notasDoProfessor?: string | null;

  @IsOptional()
  readonly atividadeID: number;

}
