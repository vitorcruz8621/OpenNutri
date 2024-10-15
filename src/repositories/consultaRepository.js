import Consulta from "../models/consultaSchema.js";
import Nutricionista from "../models/nutricionistaSchema.js";
import Paciente from "../models/pacienteSchema.js";

const getAllConsultas = async () => {
  return await Consulta.findAll();
};

const getConsulta = async (id) => {
  return await Consulta.findByPk(id);
};

const createConsulta = async (consultaData) => {
  const nutricionista = await Nutricionista.findByPk(
    consultaData.nutricionistaId
  );
  if (!nutricionista) {
    throw new Error("Nutricionista não cadastrado");
  }

  const paciente = await Paciente.findByPk(consultaData.pacienteId);
  if (!paciente) {
    throw new Error("Paciente não cadastrado");
  }

  return await Consulta.create(consultaData);
};

const deleteConsulta = async (id) => {
  const consulta = await Consulta.findByPk(id);
  if (consulta) {
    await consulta.destroy();
    return true;
  }
  return false;
};

const updateConsulta = async (id, consultaData) => {
  const consulta = await Consulta.findByPk(id);
  if (consulta) {
    await consulta.update(consultaData);
    return consulta;
  }
  return null;
};

export default {
  getAllConsultas,
  getConsulta,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
