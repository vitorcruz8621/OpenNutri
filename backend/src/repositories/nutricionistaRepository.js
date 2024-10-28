import Nutricionista from "../models/nutricionistaSchema.js";

const getAllNutricionistaWhere = async (filter) => {
  return await Nutricionista.findAll({ where: filter });
};

const getNutricionistaByIdPk = async (id) => {
  return await Nutricionista.findByPk(id);
};

const createNutricionista = async (nutricionistaData) => {
  return await Nutricionista.create(nutricionistaData);
};

const deleteNutricionista = async (id) => {
  const nutricionista = await Nutricionista.findByPk(id);
  if (nutricionista) {
    await nutricionista.destroy();
    return true;
  }
  return false;
};

const updateNutricionista = async (id, nutricionistaData) => {
  const nutricionista = await Nutricionista.findByPk(id);
  if (nutricionista) {
    await nutricionista.update(nutricionistaData);
    return nutricionista;
  }
  return null;
};

export default {
  getAllNutricionistaWhere,
  getNutricionistaByIdPk,
  createNutricionista,
  deleteNutricionista,
  updateNutricionista,
};
