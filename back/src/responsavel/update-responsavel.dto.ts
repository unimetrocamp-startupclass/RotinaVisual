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

export class UpdateResponsavelDto {
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

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(15)
  readonly telefone: string;

  @IsDateString()
  readonly data_nascimento?: string | Date | null;

  @IsOptional()
  readonly alunoID: number;

}
