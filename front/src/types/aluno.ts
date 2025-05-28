export interface AlunoEntity {
  id: number;
  nome: string;
  telefone_pais: string | null;
  email: string;
  senha: string;
  ra: number;
  divergencia: 'Autismo' | 'Síndrome de down' | 'TDAH' | 'Outro' | 'Nenhuma' | null;
  medicacao: string | null;
  data_nascimento: string | null;
  ativo: boolean;
}

export type Alunos = Array<AlunoEntity>;
