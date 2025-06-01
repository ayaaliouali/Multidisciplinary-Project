
import { Router } from "express";
import {getAllProducts} from "../controller/product.js";
import { protect } from "../middlewares/auth.js";

const router = Router();


router.get('/all', protect, getAllProducts);


export default router;