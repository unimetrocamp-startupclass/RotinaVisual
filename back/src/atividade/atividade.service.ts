import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atividade } from './atividade.entity';
import { CreateAtividadeDto } from './create-atividade.dto';
import { UpdateAtividadeDto } from './update-atividade.dto';

@Injectable()
export class AtividadeService {constructor(
    @InjectRepository(Atividade)
    private userRepository: Repository<Atividade>,
  ) {}
    createAtividade(createAtividadeDto : CreateAtividadeDto): Promise<Atividade> {
        const newAtividade = this.userRepository.create(createAtividadeDto);//trocar para alunoRepository quando ficar pronto o banco
        return this.userRepository.save(newAtividade);
    }

    getAtividades(){
        return this.userRepository.find();//trocar para alunoRepository quando ficar pronto o banco
    }

    getAtividade(id: number){
        return this.userRepository.findOne({where:{id: id}});//trocar para alunoRepository quando ficar pronto o banco
    }

    updateAtividade(id: number, updatesAtividadeDto: UpdateAtividadeDto){
        return this.userRepository.update(id, updatesAtividadeDto);
    }

    deleteAtividade(id: number){
        try{
            this.userRepository.delete(id);//trocar para alunoRepository quando ficar pronto o banco
            return {message: 'atividade removida com sucesso'};
        }
        catch (error){
            console.error(error);
            throw new HttpException('erro ao remover atividade', HttpStatus.INTERNAL_SERVER_ERROR);
        
        }
    }}
