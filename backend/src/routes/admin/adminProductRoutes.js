import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../../controllers/admin/adminProductController.js';
import { isAdmin } from '../../middlewares/auth.js';
import upload from '../../middlewares/upload.js';

const router = express.Router();

router.post('/', isAdmin, upload.single('image'), createProduct);
router.get('/A', isAdmin, getAllProducts);
router.get('/:id', isAdmin, getProduct);
router.put('/:id', isAdmin, upload.single('image'), updateProduct);
router.delete('/:id', isAdmin, deleteProduct);

export default router;