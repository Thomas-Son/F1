import { Router } from "express";

// import home_routes from "./home.routes"
import driver_routes from "./driver.routes.js"
import GP_routes from "./GP.routes.js"

const router = Router();

// router.use("api/v1", home_routes);

router.use("/api/v1/driver", driver_routes);

router.use("/api/v1/GPlist", GP_routes);

router.get("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});

export default router;