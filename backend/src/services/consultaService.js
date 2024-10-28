import consultaRepository from "../repositories/consultaRepository.js";
import nutricionistaRepository from "../repositories/nutricionistaRepository.js";
import pacienteRepository from "../repositories/pacienteRepository.js";
import { Op } from "sequelize";
import { format } from "date-fns";

const getAllConsultas = async () => {
  return await consultaRepository.getAllConsultas();
};

const getConsulta = async (id) => {
  return await consultaRepository.getConsulta(id);
};

const getConsultasByFilters = async (filters) => {
    const { dataConsulta, nomeNutricionista, nomePaciente } = filters;
    const where = {};
  
    if (dataConsulta) {
      // Format dataConsulta to 'yyyy-MM-dd HH:mm:ss' format
      where.dataConsulta = format(dataConsulta, 'yyyy-MM-dd HH:mm:ss');
      console.log(where.dataConsulta)
    }
  
    const nutricionistas = nomeNutricionista
      ? await nutricionistaRepository.getNutricionistasByName(nomeNutricionista)
      : [];
  
    const pacientes = nomePaciente
      ? await pacienteRepository.getPacientesByName(nomePaciente)
      : [];
  
    const nutricionistaIds = nutricionistas.map((n) => n.id);
    const pacienteIds = pacientes.map((p) => p.id);
  
    if (nutricionistaIds.length > 0) {
      where.nutricionistaId = { [Op.in]: nutricionistaIds };
    }
  
    if (pacienteIds.length > 0) {
      where.pacienteId = { [Op.in]: pacienteIds };
    }
  
    return await consultaRepository.getConsultasByFilters(where);
};

const getConsultaDataConsulta = async (dataConsulta) => {
    const where = {};
  
    if (dataConsulta) {
      console.log(`consultaService.js DATA_CONSULTA=${dataConsulta}`)
      where.dataConsulta = format(dataConsulta, 'yyyy-MM-dd HH:mm:ss');
      console.log(`consultaService.js where.dataConsulta=${where.dataConsulta}`)
    }
  
    return await consultaRepository.getConsultasByFilters(where);
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
  getConsultasByFilters,
  getConsultaDataConsulta,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
