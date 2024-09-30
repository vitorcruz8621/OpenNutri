import nutricionistaService from "../services/nutricionistaService.js";

const getAllNutricionistas = async (req, res) => {
  try {
    const nutricionistas = await nutricionistaService.getAllNutricionistas();
    res.status(200).json(nutricionistas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllNutricionistas,
};
