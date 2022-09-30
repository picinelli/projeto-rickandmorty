import { Request, Response } from "express";
import { authService } from "../services/authService.js";
import { UserInfo } from "../types/index.js";

export async function signUp(req: Request, res: Response) {
  const userInfo: UserInfo = req.body;

  await authService.signUp(userInfo);

  res.status(201).send("User created successfully!");
}

export async function signIn(req: Request, res: Response) {
  const userInfo: UserInfo = req.body;

  const token = await authService.signIn(userInfo);

  res.status(200).send(token);
}
