import consultaRepository from "../repositories/consultaRepository.js";

const getAllConsultas = async () => {
  return await consultaRepository.getAllConsultas();
};

const getConsulta = async (id) => {
  return await consultaRepository.getConsulta(id);
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
  getAllConsultas,
  getConsulta,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
