import { Router } from "express";
import { homePage } from "../controllers/web/Home.controller";

const router = Router();

router.get('/', homePage);

export default router;
