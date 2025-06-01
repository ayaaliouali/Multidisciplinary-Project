import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from '../controllers/admin/adminProductController.js';
import { isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', isAdmin, createProduct);        
router.get('/A', isAdmin, getAllProducts); 
router.get('/p', isAdmin, getProduct); 
router.put('/:id', isAdmin, updateProduct);     
router.delete('/:id', isAdmin, deleteProduct);   

export default router;
