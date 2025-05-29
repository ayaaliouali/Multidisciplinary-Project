import { Router } from "express";
import {createUser, getAllUsers, getUserById,updateUser,deleteUser} from "../controller/user.js";
import { protect, isAdmin } from "../middlewares/auth.js";

const router = Router();

router.post("/", createUser);
router.get("/", protect, isAdmin, getAllUsers);
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, isAdmin, deleteUser);

export default router;
