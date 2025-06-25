import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity';
import { CreateProfessorDto } from './create-professor.dto';
import { UpdateProfessorDto } from './update-professor.dto';

@Injectable()
export class ProfessorService {
    constructor(
    @InjectRepository(Professor)
    private userRepository: Repository<Professor>,
  ) {}
    createProfessor(createProfessorDto : CreateProfessorDto): Promise<Professor> {
        const newProfessor = this.userRepository.create(createProfessorDto);//trocar para alunoRepository quando ficar pronto o banco
        return this.userRepository.save(newProfessor);
    }

    getProfessores(){
        return this.userRepository.find();//trocar para alunoRepository quando ficar pronto o banco
    }

    getProfessor(id: number){
        return this.userRepository.findOne({where:{id: id}});//trocar para alunoRepository quando ficar pronto o banco
    }

    updateProfessor(id: number, updatesProfessorDto: UpdateProfessorDto){
        return this.userRepository.update(id, updatesProfessorDto);
    }

    deleteProfessor(id: number){
        try{
            this.userRepository.delete(id);//trocar para alunoRepository quando ficar pronto o banco
            return {message: 'professor removido com sucesso'};
        }
        catch (error){
            console.error(error);
            throw new HttpException('erro ao remover professor', HttpStatus.INTERNAL_SERVER_ERROR);
        
        }
    }}
