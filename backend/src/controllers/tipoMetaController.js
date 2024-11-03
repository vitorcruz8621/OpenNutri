import tipoMetaService from "../services/tipoMetaService.js";

const getAllTipoMetas = async (req, res) => {
  try {
    const tipoMetas = await tipoMetaService.getAllTipoMetas();
    res.status(200).json(tipoMetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllTipoMetas,
};