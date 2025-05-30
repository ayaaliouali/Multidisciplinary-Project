import express from 'express';

import {
  getallproduct,
  addproduct
  
} from '../controller/productcontroller.js';

const router = express.Router();


router.get('/', getallproduct);
router.post('/', addproduct);
 


export default router;
