import nutricionistaService from "../services/nutricionistaService.js";

const getAllNutricionistas = async (req, res) => {
  try {
    const nutricionistas = await nutricionistaService.getAllNutricionistas();
    res.status(200).json(nutricionistas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNutricionista = async (req, res) => {
  try {
    const id = req.params.id;
    const nutricionista = await nutricionistaService.getNutricionista(id);
    if (nutricionista) {
      res.status(200).json(nutricionista);
    } else {
      res.status(404).json({ message: "Nutricionista não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNutricionista = async (req, res) => {
  try {
    const nutricionistaData = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newNutricionista = await nutricionistaService.createNutricionista(
      nutricionistaData
    );
    res.status(201).json(newNutricionista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNutricionista = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await nutricionistaService.deleteNutricionista(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Nutricionista não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNutricionista = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, email, senha, telefone } = req.body;
    const nutricionistaData = {};

    if (nome) nutricionistaData.nome = nome;
    if (email) nutricionistaData.email = email;
    if (senha) nutricionistaData.senha = senha;
    if (telefone) nutricionistaData.telefone = telefone;

    // Atualiza o campo updatedAt com a data e hora atuais
    nutricionistaData.updatedAt = new Date();

    const updatedNutricionista = await nutricionistaService.updateNutricionista(
      id,
      nutricionistaData
    );
    if (updatedNutricionista) {
      res.status(200).json(updatedNutricionista);
    } else {
      res.status(404).json({ message: "Nutricionista não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllNutricionistas,
  getNutricionista,
  createNutricionista,
  deleteNutricionista,
  updateNutricionista,
};
