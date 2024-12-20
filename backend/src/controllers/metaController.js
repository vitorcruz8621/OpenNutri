import metaService from "../services/metaService.js";

const getAllMetasByFilters = async (req, res) => {
  try {
    const { pacienteId, tipoMetaId, dataInicio , dataFim, statusMetaId} = req.query;
    const jsonFilter = { pacienteId, tipoMetaId, dataInicio , dataFim, statusMetaId};
    const metas = await metaService.getAllMetas(jsonFilter);

    if (Array.isArray(metas) && metas.length === 0) {
      res.status(404).json({ message: "Nenhuma meta cadastrada" });
      return;
    }

    res.status(200).json(metas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMetaByPk = async (req, res) => {
  try {
    const id = req.params.id;
    const meta = await metaService.getMetaByPk(id);
    if (meta) {
      res.status(200).json(meta);
    } else {
      res.status(404).json({ message: "Meta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMeta = async (req, res) => {
  try {
    const metaData = {
      ...req.body,
    };
    const newMeta = await metaService.createMeta(metaData);
    res.status(201).json(newMeta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMeta = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await metaService.deleteMeta(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Meta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMeta = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      pacienteId,
      tipoMetaId,
      dataInicio,
      dataFim,
      statusMetaId,
      observacoes,
    } = req.body;
    const metaData = {};

    if (pacienteId) metaData.pacienteId = pacienteId;
    if (tipoMetaId) metaData.tipoMetaId = tipoMetaId;
    if (dataInicio) metaData.dataInicio = dataInicio;
    if (dataFim) metaData.dataFim = dataFim;
    if (statusMetaId) metaData.statusMetaId = statusMetaId;
    if (observacoes) metaData.observacoes = observacoes;

    const updatedMeta = await metaService.updateMeta(id, metaData);
    if (updatedMeta) {
      res.status(200).json(updatedMeta);
    } else {
      res.status(404).json({ message: "Meta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllMetasByFilters,
  getMetaByPk,
  createMeta,
  deleteMeta,
  updateMeta,
};
