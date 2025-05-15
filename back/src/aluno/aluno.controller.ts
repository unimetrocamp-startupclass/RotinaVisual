import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './create-aluno.dto';

@Controller('aluno')
export class AlunoController {
    // Dependency injection
    constructor(private alunoService: AlunoService) {}

    @Get('helloW')
    getHello(): string {
        return this.alunoService.getHello();
    }

    @Post()
    createAluno(@Body() CreateAlunoDtoBody: CreateAlunoDto) {
        // Caso tenha algum erro de validação, a DTO envia o erro antes e nem passa pelo return
        return this.alunoService.createAluno(CreateAlunoDtoBody);
    }
}
