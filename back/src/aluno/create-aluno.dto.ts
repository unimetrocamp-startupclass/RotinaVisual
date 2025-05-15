import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateAlunoDto {
  // @ApiProperty({
  //   description: 'O nome completo do usuário',
  //   example: 'João da Silva',
  //   minLength: 3,
  //   maxLength: 100,
  // })
  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
  @MaxLength(100, { message: 'O nome não pode ter mais de 100 caracteres.' })
  readonly nome: string; // 'readonly' é uma boa prática para DTOs, indicando que não devem ser modificados após a criação

  @IsNotEmpty({ message: 'O ra não pode estar vazio.' })
  readonly ra: number;

  @IsNotEmpty({ message: 'O telefone não pode estar vazio.' })
  // Poderia ser adicionada uma validação para o telefone
  readonly telefone_pais: string;

  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  readonly email: string;

  readonly divergencia?: 'Autismo' | 'Síndrome de down' | 'TDAH' | 'Outro' | 'Nenhuma' | null;

  readonly medicacao?: string | null;

  @IsNotEmpty({ message: 'A data de nascimento não pode estar vazia.' })
  readonly data_nascimento?: Date | null;

  @IsString({ message: 'A senha deve ser uma string.' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/, { message: 'A senha deve ter ao menos uma letra minúscula, uma letra maiúscula e um número.' })
  readonly senha: string;
}