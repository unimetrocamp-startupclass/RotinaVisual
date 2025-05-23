import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './create-aluno.dto';
import { UpdateAlunoDto } from './update-aluno.dto';

@Injectable()
export class AlunoService {
    constructor(
    @InjectRepository(Aluno)
    private userRepository: Repository<Aluno>,
  ) {}
    createAluno(createAlunoDto : CreateAlunoDto): Promise<Aluno> {
        const newAluno = this.userRepository.create(createAlunoDto);//trocar para alunoRepository quando ficar pronto o banco
        return this.userRepository.save(newAluno);
    }

    getAlunos(){
        return this.userRepository.find();//trocar para alunoRepository quando ficar pronto o banco
    }

    getAluno(id: number){
        return this.userRepository.findOne({where:{id: id}});//trocar para alunoRepository quando ficar pronto o banco
    }

    updateAluno(id: number, updateAlunoDto: UpdateAlunoDto){
        return this.userRepository.update(id, updateAlunoDto);
    }

    deleteAluno(id: number){
        try{
            this.userRepository.delete(id);//trocar para alunoRepository quando ficar pronto o banco
            return {message: 'aluno removido com sucesso'};
        }
        catch (error){
            console.error(error);
            throw new HttpException('erro ao remover aluno', HttpStatus.INTERNAL_SERVER_ERROR);
        
        }
    }
}
