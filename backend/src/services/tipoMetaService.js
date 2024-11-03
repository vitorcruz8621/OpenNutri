import tipoMetaRepository from "../repositories/tipoMetaRepository.js";

const getAllTipoMetas = async () => {
  return await tipoMetaRepository.getAllTipoMetas();
};

export default {
  getAllTipoMetas,
};