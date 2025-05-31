import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();

export async function getproduct(req,res){

  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export async function createproduct(req,res){

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
};


export async function updatedproduct(req,res){

  try {
    const product = await Product.findByIdAndUpdate(req
      .params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
;

export async function deleteproduct(req,res){

  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export default router;



