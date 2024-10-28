import nutricionistaRepository from "../repositories/nutricionistaRepository.js";

const getAllNutricionistaWhere = async (filter) => {
  return await nutricionistaRepository.getAllNutricionistaWhere(filter);
};

const getNutricionistaByIdPk = async (id) => {
  return await nutricionistaRepository.getNutricionistaByIdPk(id);
};

const createNutricionista = async (nutricionistaData) => {
  return await nutricionistaRepository.createNutricionista(nutricionistaData);
};

const deleteNutricionista = async (id) => {
  return await nutricionistaRepository.deleteNutricionista(id);
};

const updateNutricionista = async (id, nutricionistaData) => {
  return await nutricionistaRepository.updateNutricionista(
    id,
    nutricionistaData
  );
};

export default {
  getAllNutricionistaWhere,
  getNutricionistaByIdPk,
  createNutricionista,
  deleteNutricionista,
  updateNutricionista,
};
