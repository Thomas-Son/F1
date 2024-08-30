import {Router} from "express";
import {getGP} from "../controller/GP.js"

const router = Router();

router.get("/", getGP)

export default router;