import { Router } from "express";
import { protectRouter } from "../middleware/auth.js";
import { getUsersForSidebar, getMessages, sendMessages } from "../controller/message.controller.js";

const router = Router();
// hado l users li ykouno fl left side
router.get("/users",protectRouter,getUsersForSidebar)
//hadi t3 les msg ki yjio tht b3dahoum fl conv
router.get("/:id", protectRouter,getMessages)

router.post("/send/:id",protectRouter,sendMessages)

export default router;