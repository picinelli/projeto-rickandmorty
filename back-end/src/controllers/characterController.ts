import { Request, Response } from "express";
import { characterService } from "../services/characterService.js";
import { CharacterInfo } from "../types";

export async function createFavourite(req: Request, res: Response) {
  const characterInfo: CharacterInfo = req.body;
  const user = res.locals.user;

  await characterService.createFavourite(characterInfo, user);

  res.status(201).send("Character favourited successfully!");
}

export async function getFavourites(req: Request, res: Response) {
  const user = res.locals.user;

  const characters = await characterService.getFavourites(user);

  res.status(200).send(characters);
}
