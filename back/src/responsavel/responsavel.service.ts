import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Responsavel } from './responsavel.entity';
import { Repository } from 'typeorm';
import { CreateResponsavelDto } from './create-responsavel.dto';
import { UpdateResponsavelDto } from './update-responsavel.dto';

@Injectable()
export class ResponsavelService {constructor(
    @InjectRepository(Responsavel)
    private userRepository: Repository<Responsavel>,
  ) {}
    createResponsavel(createResponsavelDto : CreateResponsavelDto): Promise<Responsavel> {
        const newResponsavel = this.userRepository.create(createResponsavelDto);//trocar para alunoRepository quando ficar pronto o banco
        return this.userRepository.save(newResponsavel);
    }

    getResponsaveis(){
        return this.userRepository.find();//trocar para alunoRepository quando ficar pronto o banco
    }

    getResponsavel(id: number){
        return this.userRepository.findOne({where:{id: id}});//trocar para alunoRepository quando ficar pronto o banco
    }

    updateResponsavel(id: number, updatesResponsavelDto: UpdateResponsavelDto){
        return this.userRepository.update(id, updatesResponsavelDto);
    }

    deleteResponsavel(id: number){
        try{
            this.userRepository.delete(id);//trocar para alunoRepository quando ficar pronto o banco
            return {message: 'responsavel removido com sucesso'};
        }
        catch (error){
            console.error(error);
            throw new HttpException('erro ao remover responsavel', HttpStatus.INTERNAL_SERVER_ERROR);
        
        }}
    }
