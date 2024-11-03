import statusMetaService from "../services/statusMetaService.js";

const getAllStatusMetas = async (req, res) => {
  try {
    const statusMetas = await statusMetaService.getAllStatusMetas();
    res.status(200).json(statusMetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllStatusMetas,
};