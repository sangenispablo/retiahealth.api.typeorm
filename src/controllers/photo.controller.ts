import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Photo } from "../entity/Photo";
import { PhotoMetadata } from '../entity/PhotoMetadata';
;


export const getPhotos = async (req: Request, res: Response): Promise<Response> => {  
    const photos = await getRepository(Photo).find({ relations: ["metadata"] });
    return res.json(photos);
};

export const createPhoto = async (req: Request, res: Response): Promise<Response> => {
  const photo = getRepository(Photo).create(req.body);
  const results = await getRepository(Photo).save(photo);
  return res.json(results);
};

export const getPhoto = async (req: Request, res: Response): Promise<Response> => {  
  const idPhoto = req.params.id;
  const photo = await getRepository(Photo).findOne(idPhoto);
  if (photo) {
    return res.json(photo);
  }
  return res.status(404).json({msg: "No esta esa photo"});
};

export const updatePhoto = async (req: Request, res: Response): Promise<Response> => {  
  const photo = await getRepository(Photo).findOne(req.params.id);
  if (photo) {
    getRepository(Photo).merge(photo, req.body);
    const results = await getRepository(Photo).save(photo);
    return res.json(results);
  }
  return res.status(404).json({msg: "No esta esa photo"});
};