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

  @IsNotEmpty()
  @IsNumber()
  readonly ra: number;

  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  readonly telefone_pais?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsOptional()
  @IsEnum(DivergenciaEnum)
  readonly divergencia?: DivergenciaEnum | null;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  readonly medicacao?: string | null;

  @IsOptional()
  @IsDateString()
  readonly data_nascimento?: string | Date | null;

  @IsOptional()
  @IsBoolean()
  readonly ativo?: boolean;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
  readonly senha: string;
}
