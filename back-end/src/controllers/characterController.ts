import { Request, Response } from "express";
import { characterService } from "../services/characterService.js";
import { CharacterInfo } from "../types";

export async function favourite(req: Request, res: Response) {
  const characterInfo: CharacterInfo = req.body;
  const user = res.locals.user;

  await characterService.favourite(characterInfo, user);

  res.status(201).send("Character favourited successfully!");
}
