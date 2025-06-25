import { Aluno } from 'src/aluno/aluno.entity';
import { Professor } from 'src/professor/professor.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('Atividade')
export class Atividade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descricao: string;

  @Column({ type: 'date', nullable: false})
  data: Date;

  @Column({ type: 'varchar', length: 4, nullable: false })
  hora: string;

  @ManyToOne(() => Professor, (professor) => professor.atividade, { eager: true })
  professor: Professor;

  @ManyToMany(() => Aluno, (aluno) => aluno.atividade, { eager: true })
  @JoinTable()
  aluno: Aluno[];

}