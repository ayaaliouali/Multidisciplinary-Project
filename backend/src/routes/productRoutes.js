import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,  
    description: req.body.description,
    image: req.body.image
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
