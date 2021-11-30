import { Controller, Get, Param } from '@nestjs/common';
import { EmpreendimentoService } from './empreendimento.service';

@Controller('empreendimento')
export class EmpreendimentoController {
  constructor(private readonly empreendimentoService: EmpreendimentoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.empreendimentoService.findByBuildingId(param.idbuilding);
  }
}
