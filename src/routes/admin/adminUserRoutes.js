import express from 'express';
import { protect, isAdmin } from '../middlewares/auth.js';
import {getAllUsers,getUserById, updateUser,deleteUser,} from '../controllers/userController.js';

const router = express.Router();
//admin only
router.get('/', protect, isAdmin, getAllUsers);
//user or admin
router.get('/:id', protect, getUserById);
// Update user by ID — user or admin
router.put('/:id', protect, updateUser);
//admin only
router.delete('/:id', protect, isAdmin, deleteUser);

export default router;
