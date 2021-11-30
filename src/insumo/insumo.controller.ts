import { Controller, Get, Param } from '@nestjs/common';
import { InsumoService } from './insumo.service';

@Controller('insumo')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Get(':idbuilding')
  findByBuildingId(@Param() param) {
    return this.insumoService.findByBuildingId(param.idbuilding);
  }
}
