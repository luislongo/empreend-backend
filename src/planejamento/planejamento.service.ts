import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import Planejamento from './interfaces/planejamento.interface';

@Injectable()
export class PlanejamentoService {
  constructor(
    @InjectModel('Planejamento')
    private readonly planejamentoModel: mongoose.Model<Planejamento>,
  ) {}

  findByBuildingId(idbuilding: string) {
    return this.planejamentoModel.find({ idbuilding: idbuilding });
  }
}
