import * as mongoose from 'mongoose';

export const OrcamentoSchema = new mongoose.Schema({
  _id: String,
  idbuilding: String,
  idOrcamento: String,
  idPlanejamento: String,
  indice: String,
  descricao: String,
  unidade: String,
  quantidade: Number,
  objetosBIM: [
    {
      guidIFC: String,
      guidVisus: String,
      quantidade: Number,
    },
  ],
  custoTotal: {
    total: Number,
    totalSemBDI: Number,
    material: Number,
    equipamento: Number,
    transporte: Number,
    maoDeObra: Number,
    terceirizado: Number,
    verba: Number,
    comissionamento: Number,
    outros: Number,
  },
  custoUnitario: {
    total: Number,
    totalSemBDI: Number,
    material: Number,
    equipamento: Number,
    transporte: Number,
    maoDeObra: Number,
    terceirizado: Number,
    verba: Number,
    comissionamento: Number,
    outros: Number,
  },
  codigo: Number,
  tabela: String,
  tipo: String,
});
