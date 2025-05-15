import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './create-aluno.dto';

@Injectable()
export class AlunoService {
    constructor(
    @InjectRepository(Aluno)
    private userRepository: Repository<Aluno>,
  ) {}
    getHello(): string {
        return 'Hello World!';
    }

    createAluno(createAlunoDto : CreateAlunoDto): Promise<Aluno> {
        const newAluno = this.userRepository.create(createAlunoDto);
        return this.userRepository.save(newAluno);
    }
}
