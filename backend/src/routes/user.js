import { Router } from "express";
import {createUser, getAllUsers, getUserById,updateUser,deleteUser} from "../controller/user.js";
import { protect, isAdmin } from "../middlewares/auth.js";

const router = Router();

router.post("/", createUser);
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);

export default router;
