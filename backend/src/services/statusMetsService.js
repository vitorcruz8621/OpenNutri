import statusMetaRepository from "../repositories/statusMetaRepository.js";

const getAllStatusMetas = async () => {
  return await statusMetaRepository.getAllStatusMetas();
};

export default {
  getAllStatusMetas,
};