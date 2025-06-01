import express from 'express';
import Product from '../models/Product.js';
const router = express.Router();



export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}; 

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (
  req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
      , { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
}


export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'The product is deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};







