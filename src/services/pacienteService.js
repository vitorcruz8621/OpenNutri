import pacienteRepository from "../repositories/pacienteRepository.js";

const getAllPacientes = async () => {
  return await pacienteRepository.getAllPacientes();
};

const getPaciente = async (id) => {
  return await pacienteRepository.getPaciente(id);
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
  getAllPacientes,
  getPaciente,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
