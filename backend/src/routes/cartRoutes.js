import express from 'express';

import {
  getcart,
  addcart,
  deleteproduct,
  updateproduct
  
} from '../controller/cartcontroller.js';


const router = express.Router();


router.get('/:userId', getcart);
router.post('/:userId/add', addcart);
router.post('/:userId/remove', deleteproduct);
router.post('/:userId/update', updateproduct); 


export default router;







  
 
    
    


  