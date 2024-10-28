import consultaService from "../services/consultaService.js";
import { parseISO } from "date-fns";

const getAllConsultas = async (req, res) => {
    try {
      let { dataConsulta, nomeNutricionista, nomePaciente } = req.query;
      
      if (dataConsulta) {
        dataConsulta = parseISO(dataConsulta);
      }
  
      const filters = { dataConsulta, nomeNutricionista, nomePaciente };
      console.log("\nimprimindo filtros do consultaController.js");
      console.log(filters);
      const consultas = await consultaService.getConsultasByFilters(filters);
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

const getConsultaDataConsulta = async (req, res) => {
    try {
      let { dataConsulta } = req.query;
      console.log(`consultaController.js DATA_CONSULTA=${dataConsulta}`)
  
      if (dataConsulta) {
        dataConsulta = parseISO(dataConsulta);
      }
  
      const consultas = await consultaService.getConsultaDataConsulta(dataConsulta);
      res.status(200).json(consultas);
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
  getAllConsultas,
  getConsulta,
  getConsultaDataConsulta,
  createConsulta,
  deleteConsulta,
  updateConsulta,
};
