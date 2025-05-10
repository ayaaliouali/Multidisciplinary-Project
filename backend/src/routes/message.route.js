import { Router } from "express";
<<<<<<< HEAD
import {protect as protectRouter } from "../middlewares/auth.js";
=======
import { protect as protectRouter } from "../middlewares/auth.js";
>>>>>>> ce2d85aa2900975a6d2d3631953dffbb512c15c5
import { getUsersForSidebar, getMessages, sendMessages } from "../controller/message.controller.js";

const router = Router();
// hado l users li ykouno fl left side
router.get("/users",protectRouter,getUsersForSidebar)
//hadi t3 les msg ki yjio tht b3dahoum fl conv
router.get("/:id", protectRouter,getMessages)

router.post("/send/:id",protectRouter,sendMessages)

export default router;