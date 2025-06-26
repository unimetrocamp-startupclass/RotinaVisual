import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { UpdateAtividadeDto } from './update-atividade.dto';
import { CreateAtividadeDto } from './create-atividade.dto';

@Controller('atividade')
export class AtividadeController {
    constructor(private atividadeService: AtividadeService) {}
        @Post()
        createAtividade(@Body() createAtividadeDto: CreateAtividadeDto) {
            // Caso tenha algum erro de validação, a DTO envia o erro antes e nem passa pelo return
            return this.atividadeService.createAtividade(createAtividadeDto);
        }
    
        @Get()
        getAtividades() {
            return this.atividadeService.getAtividades();
        }
    
        @Get(':id')
        getAtividade(@Param('id') id: number){
            return this.atividadeService.getAtividade(id);
        }
        
        @Patch(':id')
        updateAtividade(@Param('id')id: number, @Body() updateAtividadeDto: UpdateAtividadeDto){
            return this.atividadeService.updateAtividade(id, updateAtividadeDto);
        }
    
        @Delete(':id')
        deleteAtividade(@Param('id') id: number){
            return this.atividadeService.deleteAtividade(+id);
        }
}
