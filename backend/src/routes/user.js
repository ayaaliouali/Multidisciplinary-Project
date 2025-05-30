import { Router } from "express";
import {createUser,getUserById,updateUser,} from "../controller/user.js";
import { protect } from "../middlewares/auth.js";

const router = Router();

router.post("/", createUser);
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);

export default router;
