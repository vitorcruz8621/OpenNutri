import { Router } from "express";
import statusMetaController from "../controllers/statusMetaController.js";

const router = Router();

router.get("/status-metas", statusMetaController.getAllStatusMetas);

export default router;