import consultaService from "../services/consultaService.js";

const getAllConsultas = async (req, res) => {
  try {
    const consultas = await consultaService.getAllConsultas();
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const consulta = await consultaService.getConsulta(id);
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
      createdAt: new Date(),
      updatedAt: new Date(),
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
    const { nutricionistaId, pacienteId, dataConsulta, observacoes } = req.body;
    const consultaData = {};

    if (nutricionistaId) consultaData.nutricionistaId = nutricionistaId;
    if (pacienteId) consultaData.pacienteId = pacienteId;
    if (dataConsulta) consultaData.dataConsulta = dataConsulta;
    if (observacoes) consultaData.observacoes = observacoes;

    // Atualiza o campo updatedAt com a data e hora atuais
    consultaData.updatedAt = new Date();

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
  getAllConsultas,
  getConsulta,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
