import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { signinSchema, signupSchema } from "../schemas/authSchemas.js";

const authRoute = Router();

authRoute.post("/signup", validateSchema(signupSchema), signUp);
authRoute.post("/signin", validateSchema(signinSchema), signIn);

export default authRoute;
