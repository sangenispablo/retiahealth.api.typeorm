import { Router } from "express";

import { createPhoto, getPhotos, getPhoto, updatePhoto } from "../controllers/photo.controller";

const router = Router();

router.get("/photos", getPhotos);
router.get("/photos/:id", getPhoto);
router.post("/photos", createPhoto);
router.put("/photos/:id", updatePhoto);

export default router;
