import { Controller, Get, Param } from '@nestjs/common';
import { PlanejamentoService } from './planejamento.service';

@Controller('planejamento')
export class PlanejamentoController {
  constructor(private readonly planejamentoService: PlanejamentoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.planejamentoService.findByBuildingId(param.idbuilding);
  }
}
