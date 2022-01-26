import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Atencion } from "../entity/Atencion";

export const getAtencion = async (req: Request, res: Response): Promise<Response> => {
  const id_atencion = Number(req.params.id);
  const atencion = await getRepository(Atencion)
                  .findOne(id_atencion, { relations: ["ambito", "financiacion", "financiacion.financiador"] });
  return res.json(atencion);
};

export const qryAtencion = async (req: Request, res: Response): Promise<Response> => {
  const id_detalle_proc = Number(req.params.id_detalle_proc);
  const id_financiador = Number(req.params.id_financiador);
  const id_institucion = Number(req.params.id_institucion);
  const atenciones = await getRepository(Atencion)
    .createQueryBuilder("atencion")
    .innerJoinAndSelect("atencion.ambito", "ambito")
    .innerJoinAndSelect("atencion.financiacion", "financiacion")
    .innerJoinAndSelect("financiacion.financiador", "financiador")
    .innerJoinAndSelect("atencion.modelo_atencion", "modelo_atencion")    
    .innerJoinAndSelect("modelo_atencion.centro", "centro")    
    .innerJoinAndSelect("centro.institucion", "institucion")
    .where("atencion.id_detalle_proc = :id1", { id1: id_detalle_proc })
    .andWhere("financiacion.financiador.id_financiador = :id2", {id2: id_financiador})
    .andWhere("centro.institucion.id_institucion = :id3", {id3: id_institucion})
    .getMany();
  return res.json(atenciones);
};