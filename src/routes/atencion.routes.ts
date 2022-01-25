import { Router } from "express";

import { getAtencion } from "../controllers/atencion.controller";

const router = Router();

//router.get("/atenciones", );
router.get("/atenciones/:id", getAtencion);

export default router;
