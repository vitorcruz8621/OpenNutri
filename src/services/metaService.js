import metaRepository from "../repositories/metaRepository.js";

const getAllMetas = async () => {
  return await metaRepository.getAllMetas();
};

const getMeta = async (id) => {
  return await metaRepository.getMeta(id);
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
  getAllMetas,
  getMeta,
  createMeta,
  deleteMeta,
  updateMeta,
};
