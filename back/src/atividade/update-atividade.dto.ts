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

export class UpdateAtividadeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly titulo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  readonly descricao: string;

  @IsDateString()
  readonly data: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(5)
  readonly hora: string;

  @IsNotEmpty()
  readonly professorID: number;

  @IsNotEmpty()
  readonly alunoID: number;
}
