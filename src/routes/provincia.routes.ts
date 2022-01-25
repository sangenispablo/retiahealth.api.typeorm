import { Router } from "express";

import { createProvincias, getProvincias, getProvincia } from "../controllers/provincia.controller";

const router = Router();

router.get("/provincias", getProvincias);
router.get("/provincias/:id", getProvincia);
router.post("/provincias", createProvincias);
// router.put("/provincias/:id",);
// router.delete("/provincias",);


export default router;
