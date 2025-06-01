import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../../controller/admin/adminProductController.js';
import { protect } from '../../middlewares/auth.js';
import upload from '../../middlewares/upload.js';

const router = express.Router();

router.post('/', protect, createProduct); // Create a product
router.put('/:id', protect, updateProduct); // Update a product
router.delete('/:id', protect, deleteProduct); // Delete a product
router.get('/all', protect, getAllProducts); // Fetch all products

router.get('/:id', getProduct);

export default router;