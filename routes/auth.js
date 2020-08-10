import controller from "../controllers/auth"

import authController from "../controllers/auth";
import { Router } from 'express';

const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;