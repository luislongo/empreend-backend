import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Insumo from './interfaces/insumo.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class InsumoService {
  constructor(
    @InjectModel('Insumo') private readonly insumoModel: mongoose.Model<Insumo>,
  ) {}

  async findByBuildingId(idbuilding: string): Promise<Insumo[]> {
    return await this.insumoModel.find({
      idbuilding: idbuilding,
    });
  }
}
