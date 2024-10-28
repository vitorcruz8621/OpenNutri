import { Router } from "express";
import pacienteController from "../controllers/pacienteController.js";

const router = Router();

router.get("/pacientes", pacienteController.getAllPacienteWhere);
router.get("/pacientes/:id", pacienteController.getPacienteByIdPk);
router.post("/pacientes", pacienteController.createPaciente);
router.delete("/pacientes/:id", pacienteController.deletePaciente);
router.put("/pacientes/:id", pacienteController.updatePaciente);

export default router;
