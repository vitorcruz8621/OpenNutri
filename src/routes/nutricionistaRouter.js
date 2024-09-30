import { Router } from "express";
import nutricionistaController from "../controllers/nutricionistaController.js";

const router = Router();

router.get("/nutricionistas", nutricionistaController.getAllNutricionistas);

export default router;
