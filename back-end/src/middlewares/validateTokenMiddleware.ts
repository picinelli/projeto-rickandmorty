import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import prisma from "../database.js";
import throwError from "../utils/throwError.js";

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) return throwError("Token not found", 401);
  
    const token = authorization.replace("Bearer", "").trim();
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    res.locals.token = decodedToken

    const user = await prisma.user.findUnique({where: {id: res.locals.token.userId}})
    if(!user) return throwError("User not found", 404)

    res.locals.user = user
  
    next();
  } catch(err) {
    console.log(err)
    res.status(400).send("Token format incorrect")
  }
  
}
