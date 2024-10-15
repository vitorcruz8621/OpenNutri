import { Router } from "express";
import metaController from "../controllers/metaController.js";

const router = Router();

router.get("/metas", metaController.getAllMetas);
router.get("/metas/:id", metaController.getMeta);
router.post("/metas", metaController.createMeta);
router.delete("/metas/:id", metaController.deleteMeta);
router.put("/metas/:id", metaController.updateMeta);

export default router;
