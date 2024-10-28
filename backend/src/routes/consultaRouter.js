import { Router } from "express";
import consultaController from "../controllers/consultaController.js";

const router = Router();

router.get("/consultas", consultaController.getAllConsultasByFilters);
router.get("/consultas/:id", consultaController.getConsultaByIdPk );
router.post("/consultas", consultaController.createConsulta);
router.delete("/consultas/:id", consultaController.deleteConsulta);
router.put("/consultas/:id", consultaController.updateConsulta);

export default router;
