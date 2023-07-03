import { Router } from "express";
import { homePage } from "../controllers/web/HomeController";

const router = Router();

router.get('/', homePage);

export default router;
