import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponsavelService } from './responsavel.service';
import { CreateResponsavelDto } from './create-responsavel.dto';
import { UpdateResponsavelDto } from './update-responsavel.dto';

@Controller('responsavel')
export class ResponsavelController {        // Dependency injection
        constructor(private responsavelService: ResponsavelService) {}
        @Post()
        createResponsavel(@Body() createResponsavelDtoBody: CreateResponsavelDto) {
            return this.responsavelService.createResponsavel(createResponsavelDtoBody);
        }
    
        @Get()
        getResponsaveis() {
            return this.responsavelService.getResponsaveis();
        }
    
        @Get(':id')
        getResponsavel(@Param('id') id: number){
            return this.responsavelService.getResponsavel(id);
        }
        
        @Patch(':id')
        updateResponsavel(@Param('id')id: number, @Body() updateResponsavelDto: UpdateResponsavelDto){
            return this.responsavelService.updateResponsavel(id, updateResponsavelDto);
        }
    
        @Delete(':id')
        deleteResponsavel(@Param('id') id: number){
            return this.responsavelService.deleteResponsavel(+id);
        }
}
