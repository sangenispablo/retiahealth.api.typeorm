import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Provincia } from "../entity/Provincia";

export const getProvincias = async (req: Request, res: Response): Promise<Response> => {
  const provincias = await getRepository(Provincia).find();
  return res.json(provincias);
};

export const createProvincias = async (req: Request, res: Response): Promise<Response> => {  
  const newProvincia = getRepository(Provincia).create(req.body);
  const results = await getRepository(Provincia).save(newProvincia);
  return res.json(results);
};

export const getProvincia = async (req: Request, res: Response): Promise<Response> => {
  const id_provincia = Number(req.params.id);
  const provincia = await getRepository(Provincia).findByIds([id_provincia]);
  return res.json(provincia);
};