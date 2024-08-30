import { Router } from "express";
import { getTeam } from "../controller/team.js"

const router = Router();

router.get("/", getTeam);

export default router;