import { Router } from "express";
import consultaController from "../controllers/consultaController.js";

const router = Router();

router.get("/consultas", consultaController.getAllConsultas);
router.get("/consultas/:id", consultaController.getConsulta);
router.post("/consultas", consultaController.createConsulta);
router.delete("/consultas/:id", consultaController.deleteConsulta);
router.put("/consultas/:id", consultaController.updateConsulta);

export default router;
