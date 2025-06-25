import { Atividade } from 'src/atividade/atividade.entity';
import { Responsavel } from 'src/responsavel/responsavel.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';

@Entity('Aluno')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  sobrenome: string;

  @Column({type: 'number', length: 11, nullable: false })
  cpf: number;

  @Column({ type: 'bigint', unique: true, nullable: false })
  ra: number;

  @Column({ type: 'date', nullable: true })
  data_nascimento?: Date | null;
  /*
  @Column({ type: 'bigint', nullable: true })
  telefone_pais?: string | null;
  */
  @ManyToOne(()=> Responsavel, (responsavel)=> responsavel.aluno, {eager: true})
  responsavel: Responsavel;
  /*
  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;
  */
  @Column({
    type: 'enum',
    enum: ['Autismo', 'Síndrome de down', 'TDAH', 'Outro', 'Nenhuma'],
    nullable: true
  })
  divergencia?: 'Autismo' | 'Síndrome de down' | 'TDAH' | 'Outro' | 'Nenhuma' | null;

  @Column({ type: 'text', nullable: true })
  medicacao?: string | null;

  @Column({ type: 'varchar', length: 255, nullable: false })
  senha: string;
    
  @Column({ type: 'boolean', default: true, nullable: false })
  ativo: boolean;

  @Column({ type: 'varchar', nullable: true})
  notasDoProfessor?: string | null;

  @ManyToMany(() => Atividade, (atividade) => atividade.aluno)
  atividade: Atividade[];
}