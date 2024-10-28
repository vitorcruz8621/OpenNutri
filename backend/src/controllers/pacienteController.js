import pacienteService from "../services/pacienteService.js";

const getAllPacienteWhere = async (req, res) => {
  try {
    const filter = req.query;
    let pacientes;

    pacientes = await pacienteService.getAllPacienteWhere(filter);

    if (Array.isArray(pacientes) && pacientes.length === 0) {
      res.status(404).json({ message: "Paciente não encontrado" });
      return;
    }

    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPacienteByIdPk = async (req, res) => {
  try {
    const id = req.params.id;
    const paciente = await pacienteService.getPacienteByIdPk(id);
    if (paciente) {
      res.status(200).json(paciente);
    } else {
      res.status(404).json({ message: "Paciente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPaciente = async (req, res) => {
  try {
    const pacienteData = {
      ...req.body,
    };
    const newPaciente = await pacienteService.createPaciente(pacienteData);
    res.status(201).json(newPaciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePaciente = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await pacienteService.deletePaciente(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Paciente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePaciente = async (req, res) => {
  try {
    const id = req.params.id;
    const { nome, email, dataNascimento, telefone } = req.body;
    const pacienteData = {};

    if (nome) pacienteData.nome = nome;
    if (email) pacienteData.email = email;
    if (dataNascimento) pacienteData.dataNascimento = dataNascimento;
    if (telefone) pacienteData.telefone = telefone;

    const updatedPaciente = await pacienteService.updatePaciente(
      id,
      pacienteData
    );
    if (updatedPaciente) {
      res.status(200).json(updatedPaciente);
    } else {
      res.status(404).json({ message: "Paciente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getAllPacienteWhere,
  getPacienteByIdPk,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
