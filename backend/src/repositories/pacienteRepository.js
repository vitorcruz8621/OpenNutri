import Paciente from "../models/pacienteSchema.js";

const getAllPacienteWhere = async (filter) => {
  return await Paciente.findAll({ where: filter });
};

const getPacienteByIdPk = async (id) => {
  return await Paciente.findByPk(id);
};

const createPaciente = async (pacienteData) => {
  return await Paciente.create(pacienteData);
};

const deletePaciente = async (id) => {
  const paciente = await Paciente.findByPk(id);
  if (paciente) {
    await paciente.destroy();
    return true;
  }
  return false;
};

const updatePaciente = async (id, pacienteData) => {
  const paciente = await Paciente.findByPk(id);
  if (paciente) {
    await paciente.update(pacienteData);
    return paciente;
  }
  return null;
};

export default {
  getAllPacienteWhere,
  getPacienteByIdPk,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
