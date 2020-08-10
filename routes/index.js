const midwares = require("../middleware");
import { Router } from 'express';

const router = Router();

router.use(midwares.headers);
router.use("/auth", require("./auth"));

export default router;