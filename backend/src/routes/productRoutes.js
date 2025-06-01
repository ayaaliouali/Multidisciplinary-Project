
import { Router } from "express";
import {getAllProducts, getTopProducts, getShopProducts} from "../controller/product.js";
import { protect } from "../middlewares/auth.js";

const router = Router();


router.get('/all', protect, getAllProducts);
router.get('/top', protect, getTopProducts);
router.get('/shop', protect, getShopProducts);


export default router;