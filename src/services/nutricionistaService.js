import nutricionistaRepository from "../repositories/nutricionistaRepository.js";

const getAllNutricionistas = async () => {
  return await nutricionistaRepository.getAllNutricionistas();
};

const getNutricionista = async (id) => {
  return await nutricionistaRepository.getNutricionista(id);
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
  getAllNutricionistas,
  getNutricionista,
  createNutricionista,
  deleteNutricionista,
  updateNutricionista,
};
