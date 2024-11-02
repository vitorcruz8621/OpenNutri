import { getAllStatusConsultasRepo, getStatusConsultaByIdRepo } from '../repositories/statusConsultaRepository.js';

export const getAllStatusConsultasService = async () => {
  return await getAllStatusConsultasRepo();
};

export const getStatusConsultaByIdService = async (id) => {
  return await getStatusConsultaByIdRepo(id);
};