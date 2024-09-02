import { Router } from "express";
import { signup, signin, signout, getInfoUser } from "../controller/user.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout)

router.get("/:label", getInfoUser)

export default router;