import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import throwError from "../utils/throwError.js";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {

    const body = req.body;
    const { error, value } = schema.validate(body);
    if (error) throwError(`${error.details[0].message}`, 400);

    next();
  };
}