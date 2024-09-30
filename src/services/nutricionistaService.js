import nutricionistaRepository from "../repositories/nutricionistaRepository.js";

const getAllNutricionistas = async () => {
  return await nutricionistaRepository.getAllNutricionistas();
};

export default {
  getAllNutricionistas,
};
