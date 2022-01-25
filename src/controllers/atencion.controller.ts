import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Atencion } from "../entity/Atencion";

export const getAtencion = async (req: Request, res: Response): Promise<Response> => {
  const id_atencion = Number(req.params.id);
  const atencion = await getRepository(Atencion).findByIds([id_atencion]);
  return res.json(atencion);
};