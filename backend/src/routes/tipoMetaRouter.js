import { Router } from "express";
import tipoMetaController from "../controllers/tipoMetaController.js";

const router = Router();

router.get("/tipo-metas", tipoMetaController.getAllTipoMetas);

export default router;