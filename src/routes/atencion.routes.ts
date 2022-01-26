import { Router } from "express";

import { getAtencion, qryAtencion } from "../controllers/atencion.controller";

const router = Router();

//router.get("/atenciones", );
router.get("/atenciones/:id", getAtencion);
router.get("/atenciones/:id_detalle_proc/:id_financiador/:id_institucion", qryAtencion);

export default router;
