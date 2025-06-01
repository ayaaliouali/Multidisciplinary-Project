import { Router } from "express";
import {createUser,getUserById,updateUser,getCurrentUser} from "../controller/user.js";
import { protect } from "../middlewares/auth.js";

const router = Router();

router.post("/", createUser);
router.get("/me", protect, getCurrentUser); // New endpoint
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);

export default router;
