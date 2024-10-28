import consultaService from "../services/consultaService.js";

const getAllConsultasByFilters = async (req, res) => {
  try {
    const { nomePaciente, nomeNutricionista, dataConsulta } = req.query;
    const jsonFilter = { nomePaciente, nomeNutricionista , dataConsulta};
    const consultas = await consultaService.getAllConsultasByFilters(jsonFilter);
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConsultaByIdPk = async (req, res) => {
  try {
    const id = req.params.id;
    const consulta = await consultaService.getConsultaByIdPk(id);
    if (consulta) {
      res.status(200).json(consulta);
    } else {
      res.status(404).json({ message: "Consulta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createConsulta = async (req, res) => {
  try {
    const consultaData = {
      ...req.body,
    };
    const newConsulta = await consultaService.createConsulta(consultaData);
    res.status(201).json(newConsulta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await consultaService.deleteConsulta(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Consulta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const { dataConsulta, observacoes } = req.body;
    const consultaData = {};

    if (dataConsulta) consultaData.dataConsulta = dataConsulta;
    if (observacoes) consultaData.observacoes = observacoes;

    const updatedConsulta = await consultaService.updateConsulta(
      id,
      consultaData
    );
    if (updatedConsulta) {
      res.status(200).json(updatedConsulta);
    } else {
      res.status(404).json({ message: "Consulta não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllConsultasByFilters,
  getConsultaByIdPk,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
