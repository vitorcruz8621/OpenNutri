import { getAllStatusConsultasService, getStatusConsultaByIdService } from '../services/statusConsultaService.js';

export const getAllStatusConsultas = async (req, res) => {
  try {
    const statusConsultas = await getAllStatusConsultasService();
    res.json(statusConsultas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar status das consultas' });
  }
};

export const getStatusConsultaById = async (req, res) => {
  try {
    const statusConsulta = await getStatusConsultaByIdService(req.params.id);
    if (statusConsulta) {
      res.json(statusConsulta);
    } else {
      res.status(404).json({ error: 'StatusConsulta não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar status da consulta' });
  }
};