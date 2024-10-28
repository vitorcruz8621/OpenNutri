import nutricionistaService from "../services/nutricionistaService.js";

const getAllNutricionistaWhere = async (req, res) => {
  try {
    const filter = req.query;
    let nutricionistas;

    nutricionistas = await nutricionistaService.getAllNutricionistaWhere(filter);

    if (Array.isArray(nutricionistas) && nutricionistas.length === 0) {
      res.status(404).json({ message: "Nutricionista não encontrado" });
      return;
    }

    res.status(200).json(nutricionistas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNutricionistaByIdPk = async (req, res) => {
  try {
    const id = req.params.id;
    const nutricionista = await nutricionistaService.getNutricionistaByIdPk(id);
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
    const { nome, email, senha, telefone } = req.body;
    console.log(
      `Nutricionista: nome=${nome}, email=${email}, senha=${senha}, telefone=${telefone}`
    );
    const nutricionistaData = {
      nome,
      email,
      senha,
      telefone,
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
  getAllNutricionistaWhere,
  getNutricionistaByIdPk,
  createNutricionista,
  deleteNutricionista,
  updateNutricionista,
};
