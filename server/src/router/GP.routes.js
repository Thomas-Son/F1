import {Router} from "express";
import { getGP, getGPTop3} from "../controller/GP.js"

const router = Router();

router.get("/", getGP);
router.get("/top3/:id", getGPTop3);

export default router;