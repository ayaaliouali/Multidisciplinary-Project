import  express from'express';
import { protect } from '../middlewares/auth.js';

import { check } from'express-validator';
import {
  createComment,
  getProductComments,
  updateComment,
  deleteComment,
  getAverageRating
} from '../controller/commentsController.js';


const router = express.Router();

const commentValidation = [
  check('product', 'Product ID is required').not().isEmpty(),
  check('rating', 'Please include a rating between 1 and 5').isInt({ min: 1, max: 5 }),
  check('comment', 'Comment must be between 10 and 500 characters').isLength({ min: 10, max: 500 })
];

      
router.post('/',  commentValidation, createComment);
router.get('/product/:productId', getProductComments);
router.get('/product/:productId/average', getAverageRating);
router.put('/:id', protect, commentValidation, updateComment); 
router.delete('/:id', protect, deleteComment);

export default router;
   