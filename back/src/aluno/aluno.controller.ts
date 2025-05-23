import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './create-aluno.dto';
import { UpdateAlunoDto } from './update-aluno.dto';

@Controller('aluno')
export class AlunoController {
    // Dependency injection
    constructor(private alunoService: AlunoService) {}
    @Post()
    createAluno(@Body() CreateAlunoDtoBody: CreateAlunoDto) {
        // Caso tenha algum erro de validação, a DTO envia o erro antes e nem passa pelo return
        return this.alunoService.createAluno(CreateAlunoDtoBody);
    }

    @Get()
    getAlunos() {
        return this.alunoService.getAlunos();
    }

    @Get(':id')
    getAluno(@Param('id') id: number){
        return this.alunoService.getAluno(id);
    }
    
    @Patch(':id')
    updateAluno(@Param('id')id: number, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.alunoService.updateAluno(id, updateAlunoDto);
    }

    @Delete(':id')
    deleteAluno(@Param('id') id: number){
        return this.alunoService.deleteAluno(+id);
    }


}
