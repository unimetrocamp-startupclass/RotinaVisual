import { Atividade } from 'src/atividade/atividade.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('Professor')
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  sobrenome: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'bigint', nullable: false })
  telefone: string;

  @Column({ type: 'text', nullable: true })
  especialidade?: string | null;

  @Column({ type: 'text', nullable: false })
  genero: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento?: Date | null;

  @Column({
    type: 'enum',
    enum: [
      'Geografia',
      'História',
      'Matemática',
      'Português',
      'Outro',
      'Nenhuma',
    ],
    nullable: true,
  })
  disciplinas?:
    | 'Geografia'
    | 'História'
    | 'Matemática'
    | 'Português'
    | 'Outro'
    | 'Nenhuma'
    | null;

  @Column({ type: 'boolean', default: true, nullable: false })
  admin: boolean;

  @OneToMany(() => Atividade, (atividade) => atividade.professor)
  atividade: Atividade[];
}
