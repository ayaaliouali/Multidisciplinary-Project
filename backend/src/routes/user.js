import { Router } from "express";
import { createUser } from "../controller/user.js";

const router = Router();

router.post("/",createUser);

export default router;