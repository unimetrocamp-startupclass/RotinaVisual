import { Aluno } from 'src/aluno/aluno.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('Responsavel')
export class Responsavel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  sobrenome: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'bigint', nullable: false })
  telefone: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento?: Date | null;

  @OneToMany(() => Aluno, (aluno) => aluno.responsavel)
  aluno: Aluno[];
}
