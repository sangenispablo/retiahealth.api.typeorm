import { Router } from "express";

import { getAtencion, qryAtencion } from "../controllers/atencion.controller";

const router = Router();

//router.get("/atenciones", );
router.get("/atenciones/:id", qryAtencion);

export default router;
