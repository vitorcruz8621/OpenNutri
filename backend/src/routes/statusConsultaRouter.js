import express from 'express';
import { getAllStatusConsultas, getStatusConsultaById } from '../controllers/statusConsultaController.js';

const router = express.Router();

router.get('/status-consultas', getAllStatusConsultas);
router.get('/status-consultas/:id', getStatusConsultaById);

export default router;