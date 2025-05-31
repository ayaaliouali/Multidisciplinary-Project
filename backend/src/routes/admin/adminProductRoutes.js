import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from '../../controllers/admin/productAdminController.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

const router = express.Router();

router.post('/', isAdmin, createProduct);        
router.get('/adAll', isAdmin, getAllProducts); 
router.get('/ad', isAdmin, getProduct); 
router.put('/:id', isAdmin, updateProduct);     
router.delete('/:id', isAdmin, deleteProduct);   

export default router;