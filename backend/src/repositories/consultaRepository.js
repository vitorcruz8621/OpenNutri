import Consulta from "../models/consultaSchema.js";
import Nutricionista from "../models/nutricionistaSchema.js";
import Paciente from "../models/pacienteSchema.js";
import { Op } from "sequelize";

const getAllConsultasByFilters = async ({ nomePaciente, nomeNutricionista, dataConsulta }) => {
  const whereClause = {};
  
  if (nomePaciente) {
    whereClause['$paciente.nome$'] = { [Op.like]: `%${nomePaciente}%` };
  }
  
  if (nomeNutricionista) {
    whereClause['$nutricionista.nome$'] = { [Op.like]: `%${nomeNutricionista}%` };
  }

  if (dataConsulta) {
    whereClause['data_consulta'] = { [Op.like]: `%${dataConsulta}%` };
  }

  return await Consulta.findAll({
    where: whereClause,
    include: [
      { model: Nutricionista, as: "nutricionista" },
      { model: Paciente, as: "paciente" },
    ],
  });
};

const getConsultaByIdPk = async (id) => {
  return await Consulta.findByPk(id, {
    include: [
      { model: Nutricionista, as: "nutricionista" },
      { model: Paciente, as: "paciente" },
    ],
  });
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
  getConsultaByIdPk,
  getAllConsultasByFilters,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
