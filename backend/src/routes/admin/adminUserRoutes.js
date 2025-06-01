import express from 'express';
import { protect, isAdmin } from '../middlewares/auth.js';
import { deleteUser, getAllUsers } from '../../controller/admin/adminUserController.js';

const router = express.Router();
//admin only
router.get('/', protect, isAdmin, getAllUsers);
//admin only
router.delete('/:id', protect, isAdmin, deleteUser);

export default router;
