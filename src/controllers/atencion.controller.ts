import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Atencion } from "../entity/Atencion";

export const getAtencion = async (req: Request, res: Response): Promise<Response> => {
  const id_atencion = Number(req.params.id);
  const atencion = await getRepository(Atencion).findOne(id_atencion, { relations: ["ambito", "financiacion"] });
  return res.json(atencion);
};

export const qryAtencion = async (req: Request, res: Response): Promise<Response> => {
  const id_atencion = Number(req.params.id);
  const atencion = await getRepository(Atencion).createQueryBuilder("atenciones")
    .where("atenciones.id_atencion = :id", { id: id_atencion })
    .getOne();
  return res.json(atencion);
};