import {Router} from "express";
import {getBetGroup} from "../controller/group.js"

const router = Router();

router.get("/", getBetGroup);

export default router;