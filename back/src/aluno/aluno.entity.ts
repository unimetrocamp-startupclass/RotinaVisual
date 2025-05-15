import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Aluno')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'integer', length: 20, nullable: true })
  telefone_pais?: string | null;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  senha: string;

  @Column({ type: 'integer', length: 50, unique: true, nullable: false })
  ra: number;

  @Column({
    type: 'enum',
    enum: ['Autismo', 'Síndrome de down', 'TDAH', 'Outro', 'Nenhuma'],
    nullable: true
  })
  divergencia?: 'Autismo' | 'Síndrome de down' | 'TDAH' | 'Outro' | 'Nenhuma' | null;

  @Column({ type: 'text', nullable: true })
  medicacao?: string | null;

  @Column({ type: 'date', nullable: true })
  data_nascimento?: Date | null;

  @Column({ type: 'boolean', default: true, nullable: false })
  ativo: boolean;
}