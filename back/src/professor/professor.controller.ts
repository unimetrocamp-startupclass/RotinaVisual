import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './create-professor.dto';
import { UpdateProfessorDto } from './update-professor.dto';

@Controller('professor')
export class ProfessorController {
        // Dependency injection
        constructor(private professorService: ProfessorService) {}
        @Post()
        createProfessor(@Body() CreateProfessorDtoBody: CreateProfessorDto) {
            // Caso tenha algum erro de validação, a DTO envia o erro antes e nem passa pelo return
            return this.professorService.createProfessor(CreateProfessorDtoBody);
        }
    
        @Get()
        getProfessores() {
            return this.professorService.getProfessores();
        }
    
        @Get(':id')
        getProfessor(@Param('id') id: number){
            return this.professorService.getProfessor(id);
        }
        
        @Patch(':id')
        updateProfessor(@Param('id')id: number, @Body() updateProfessorDto: UpdateProfessorDto){
            return this.professorService.updateProfessor(id, updateProfessorDto);
        }
    
        @Delete(':id')
        deleteProfessor(@Param('id') id: number){
            return this.professorService.deleteProfessor(+id);
        }
}
