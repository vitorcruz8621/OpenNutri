import metaRepository from "../repositories/metaRepository.js";

const getAllMetasByFilters = async (jsonFilter) => {
  return await metaRepository.getAllMetasByFilters(jsonFilter);
};

const getMetaByPk = async (id) => {
  return await metaRepository.getMetaByPk(id);
};

const createMeta = async (metaData) => {
  return await metaRepository.createMeta(metaData);
};

const deleteMeta = async (id) => {
  return await metaRepository.deleteMeta(id);
};

const updateMeta = async (id, metaData) => {
  return await metaRepository.updateMeta(id, metaData);
};

export default {
  getAllMetasByFilters,
  getMetaByPk,
  createMeta,
  deleteMeta,
  updateMeta,
};
