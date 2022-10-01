import { Router } from "express";
import authRoute from "./authRoute.js";
import characterRoute from "./characterRoute.js";

const router = Router();

router.use(authRoute);
router.use(characterRoute);

export default router;
