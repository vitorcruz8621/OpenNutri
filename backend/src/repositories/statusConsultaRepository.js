import StatusConsulta from '../models/statusConsultaSchema.js';

export const getAllStatusConsultasRepo = async () => {
  return await StatusConsulta.findAll();
};

export const getStatusConsultaByIdRepo = async (id) => {
  return await StatusConsulta.findByPk(id);
};