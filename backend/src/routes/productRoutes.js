
import { Router } from "express";
import {getAllProducts} from "../controller/product.js";
import { protect } from "../middlewares/auth.js";

const router = Router();


router.get('/All', protect, getAllProducts);


export default router;