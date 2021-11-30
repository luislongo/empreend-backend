import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Orcamento from './interfaces/orcamento.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class OrcamentoService {
  constructor(
    @InjectModel('Orcamento')
    private readonly orcamentoModel: mongoose.Model<Orcamento>,
  ) {}

  async findByBuildingId(idbuilding: string): Promise<Orcamento[]> {
    return await this.orcamentoModel.find({
      idbuilding: idbuilding,
    });
  }

  async desembolsoPrevisto(
    idbuilding: string,
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    return this.orcamentoModel.aggregate([
      { $match: { idbuilding: idbuilding } },
      {
        $project: {
          idPlanejamento: 1,
          custoTotal: 1,
        },
      },
      {
        $lookup: {
          from: '_planejamento',
          localField: 'idPlanejamento',
          foreignField: 'idPlanejamento',
          as: 'planejamento',
        },
      },
      { $unwind: 'planejamento' },
      {
        $match: {
          'planejamento.planejamento.inicioPlanejado': {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
    ]);
  }
}
