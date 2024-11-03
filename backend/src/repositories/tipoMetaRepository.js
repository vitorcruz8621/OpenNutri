import TipoMeta from "../models/tipoMetaSchema.js";

const getAllTipoMetas = async () => {
  return await TipoMeta.findAll();
};

export default {
  getAllTipoMetas,
};