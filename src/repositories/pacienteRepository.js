import Paciente from "../models/pacienteSchema.js";

const getAllPacientes = async () => {
  return await Paciente.findAll();
};

const getPaciente = async (id) => {
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
  getAllPacientes,
  getPaciente,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
