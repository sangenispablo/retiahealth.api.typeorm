import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Photo } from "../entity/Photo";

export const getPhotos = async (req: Request, res: Response): Promise<Response> => {  
    const photos = await getRepository(Photo).find();
    return res.json(photos);
};

export const createPhoto = async (req: Request, res: Response): Promise<Response> => {
  const photo = getRepository(Photo).create(req.body);
  const results = await getRepository(Photo).save(photo);
  return res.json(results);
};
