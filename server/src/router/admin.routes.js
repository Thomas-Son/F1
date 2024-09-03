import { Router } from "express";
import { getRoleAll, addRole, getRole, deleteRole, updateRole } from "../controller/admin/role.js";

const router = Router();

router.get("/role/all", getRoleAll);
router.get("/role/:id", getRole);
router.post("/role/add", addRole);
router.delete("/role/delete/:id", deleteRole);
router.post("/role/update/:id", updateRole);

export default router;