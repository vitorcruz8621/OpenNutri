import { Router } from "express";
import metaController from "../controllers/metaController.js";

const router = Router();

router.get("/metas", metaController.getAllMetasByFilters);
router.get("/metas/:id", metaController.getMetaByPk);
router.post("/metas", metaController.createMeta);
router.delete("/metas/:id", metaController.deleteMeta);
router.put("/metas/:id", metaController.updateMeta);

export default router;
