import { Router } from "express";

import { createPhoto, getPhotos } from "../controllers/photo.controller";

const router = Router();

router.get("/photos", getPhotos);
router.post("/photos", createPhoto);

export default router;
