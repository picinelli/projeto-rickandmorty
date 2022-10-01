import { Router } from "express";
import {
  createFavourite,
  getFavourites,
} from "../controllers/characterController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { validateToken } from "../middlewares/validateTokenMiddleware.js";
import { characterSchema } from "../schemas/characterSchemas.js";

const characterRoute = Router();

characterRoute.post(
  "/favourite",
  validateSchema(characterSchema),
  validateToken,
  createFavourite
);
characterRoute.get("/favourites", validateToken, getFavourites);

export default characterRoute;
