import { Router } from "express";
import nutricionistaController from "../controllers/nutricionistaController.js";

const router = Router();

router.get("/nutricionistas", nutricionistaController.getAllNutricionistaWhere);
router.get("/nutricionistas/:id", nutricionistaController.getNutricionistaByIdPk);
router.post("/nutricionistas", nutricionistaController.createNutricionista);
router.delete(
  "/nutricionistas/:id",
  nutricionistaController.deleteNutricionista
);
router.put("/nutricionistas/:id", nutricionistaController.updateNutricionista);

export default router;
