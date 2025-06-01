import { Router } from "express";
import {createProduct,  getAllProducts, updateProduct,deleteProduct} from "../controller/product.js";
import { protect } from "../middlewares/auth.js";

const router = Router();


router.post('/u', protect, createProduct);
router.get('/', protect,getAllProducts);
router.put('/:id', protect, updateProduct);
router.get('/:id', protect, deleteProduct)


export default router;