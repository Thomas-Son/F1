import {Router} from "express";
import {getDriver} from "../controller/driver.js"

const router = Router();

router.get("/", getDriver);

export default router;