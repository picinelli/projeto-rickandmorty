import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.message) {
    console.log(error.message);
    return res.status(error.type).send(error.message);
  }
  return res.sendStatus(500);
}
