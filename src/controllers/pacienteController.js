import pacienteService from "../services/pacienteService.js";

const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await pacienteService.getAllPacientes();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPaciente = async (req, res) => {
  try {
    const id = req.params.id;
    const paciente = await pacienteService.getPaciente(id);
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
      createdAt: new Date(),
      updatedAt: new Date(),
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

    // Atualiza o campo updatedAt com a data e hora atuais
    pacienteData.updatedAt = new Date();

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
  getAllPacientes,
  getPaciente,
  createPaciente,
  deletePaciente,
  updatePaciente,
};
