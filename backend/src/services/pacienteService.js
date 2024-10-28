import pacienteRepository from "../repositories/pacienteRepository.js";

const getAllPacienteWhere = async (filter) => {
  return await pacienteRepository.getAllPacienteWhere(filter);
};

const getPacienteByIdPk = async (id) => {
  return await pacienteRepository.getPacienteByIdPk(id);
};

const createPaciente = async (pacienteData) => {
  return await pacienteRepository.createPaciente(pacienteData);
};

const deletePaciente = async (id) => {
  return await pacienteRepository.deletePaciente(id);
};

const updatePaciente = async (id, pacienteData) => {
  return await pacienteRepository.updatePaciente(id, pacienteData);
};

export default {
  getAllPacienteWhere,
  getPacienteByIdPk,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
