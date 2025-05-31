import { Router } from "express";
import {getproduct,createproduct,updatedproduct,deleteproduct} from "../controller/product.js";
import { protect } from "../middlewares/auth.js";

const router = Router();

router.get("/", getproduct);
router.post("/", protect, createproduct);
router.put("/:id", protect, updatedproduct);
router.delete("/:id", protect, deleteproduct);

export default router;