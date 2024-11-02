import Meta from "../models/metaSchema.js";
import Paciente from "../models/pacienteSchema.js";
import TipoMeta from "../models/tipoMetaSchema.js";
import StatusMeta from "../models/statusMetaSchema.js";

const getAllMetasByFilters = async ({ pacienteId, tipoMetaId, dataInicio , dataFim, statusMetaId}) => {
  const whereClause = {};
  
  if (pacienteId) {
    whereClause['meta.paciente_id'] = { [Op.eq]: `%${pacienteId}%` };
  }
  
  if (nomeNutricionista) {
    whereClause['tipo_meta_id'] = { [Op.like]: `%${tipoMetaId}%` };
  }

  if (dataInicio) {
    whereClause['data_inicio'] = { [Op.like]: `%${dataInicio}%` };
  }

  if (dataFim) {
    whereClause['data_fim'] = { [Op.like]: `%${dataFim}%` };
  }

  if (statusMetaId) {
    whereClause['status_meta_id'] = { [Op.eq]: `%${statusMetaId}%` };
  }

  return await Meta.findAll({
    where: whereClause,
    include: [
      { model: Paciente, as: "paciente" },
      { model: TipoMeta, as: "tipoMeta" },
      { model: StatusMeta, as: "statusMeta" },
    ],
  });
};

const getMetaByPk = async (id) => {
  return await Meta.findByPk(id, {
    include: [
      { model: Paciente, as: "paciente" },
      { model: TipoMeta, as: "tipoMeta" },
      { model: StatusMeta, as: "statusMeta" },
    ],
  });
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
  getAllMetasByFilters,
  getMetaByPk,
  createMeta,
  deleteMeta,
  updateMeta,
};
