import consultaRepository from "../repositories/consultaRepository.js";

const getConsultaByIdPk = async (id) => {
  return await consultaRepository.getConsultaByIdPk(id);
};

const getAllConsultasByFilters = async (jsonFilter) => {
  return await consultaRepository.getAllConsultasByFilters(jsonFilter);
};

const createConsulta = async (consultaData) => {
  return await consultaRepository.createConsulta(consultaData);
};

const deleteConsulta = async (id) => {
  return await consultaRepository.deleteConsulta(id);
};

const updateConsulta = async (id, consultaData) => {
  return await consultaRepository.updateConsulta(id, consultaData);
};

export default {
  getAllConsultasByFilters,
  getConsultaByIdPk,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
