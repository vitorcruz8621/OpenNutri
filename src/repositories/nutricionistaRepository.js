import Nutricionista from "../models/nutricionistaSchema.js";

const getAllNutricionistas = async () => {
  return await Nutricionista.findAll();
};

export default {
  getAllNutricionistas,
};
