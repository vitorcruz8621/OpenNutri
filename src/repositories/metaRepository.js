import Meta from "../models/metaSchema.js";
import Paciente from "../models/pacienteSchema.js";
import TipoMeta from "../models/tipoMetaSchema.js";
import StatusMeta from "../models/statusMetaSchema.js";

const getAllMetas = async () => {
  return await Meta.findAll();
};

const getMeta = async (id) => {
  return await Meta.findByPk(id);
};

const createMeta = async (metaData) => {
  const paciente = await Paciente.findByPk(metaData.pacienteId);
  if (!paciente) {
    throw new Error("Paciente não cadastrado");
  }

  const tipoMeta = await TipoMeta.findByPk(metaData.tipoMetaId);
  if (!tipoMeta) {
    throw new Error("Tipo de Meta não cadastrada");
  }

  const statusMeta = await StatusMeta.findByPk(metaData.statusMetaId);
  if (!statusMeta) {
    throw new Error("Status de Meta não cadastrado");
  }

  return await Meta.create(metaData);
};

const deleteMeta = async (id) => {
  const meta = await Meta.findByPk(id);
  if (meta) {
    await meta.destroy();
    return true;
  }
  return false;
};

const updateMeta = async (id, metaData) => {
  const meta = await Meta.findByPk(id);
  if (meta) {
    await meta.update(metaData);
    return meta;
  }
  return null;
};

export default {
  getAllMetas,
  getMeta,
  createMeta,
  deleteMeta,
  updateMeta,
};
