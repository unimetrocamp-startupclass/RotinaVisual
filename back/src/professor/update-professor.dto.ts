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

export enum DisciplinaEnum {
  GEOGRAFIA = 'Geografia',
  HISTORIA = 'História',
  MATEMATICA = 'Matemática',
  PORTUGUES = 'Português',
  OUTRO = 'Outro',
  NENHUMA = 'Nenhuma',
}

export class UpdateProfessorDto {
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

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  readonly telefone: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  readonly especialidade?: string | null;

  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  readonly genero: string;

  @IsOptional()
  @IsDateString()
  readonly data_nascimento?: string | Date | null;

  @IsOptional()
  @IsEnum(DisciplinaEnum)
  readonly disciplinas?: DisciplinaEnum | null;

  @IsOptional()
  @IsBoolean()
  readonly admin?: boolean;

  @IsOptional()
  readonly atividadeID: number;

}