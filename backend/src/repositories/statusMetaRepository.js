import StatusMeta from "../models/statusMetaSchema.js";

const getAllStatusMetas = async () => {
  return await StatusMeta.findAll();
};

export default {
  getAllStatusMetas,
};