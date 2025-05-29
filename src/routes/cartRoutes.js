import express from 'express';
import Cart from'../models/Cart.js';
import Product from'../models/Product.js';
const router = express.Router();


router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/:userId/add', async (req, res) => {
  const { productId, quantity } = req.body;
  
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: req.params.userId });

    if (!cart) {
      cart = new Cart({ user: req.params.userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({ product: productId, quantity: quantity || 1 });
    }

    await cart.save();
    res.json(await cart.populate('items.product'));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.post('/:userId/remove', async (req, res) => {
  const { productId } = req.body;
  
  try {
    const cart = await Cart.findOne({ user: req.params.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    await cart.save();
    res.json(await cart.populate('items.product'));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.post('/:userId/update', async (req, res) => {
  const { productId, quantity } = req.body;
  
  try {
    const cart = await Cart.findOne({ user: req.params.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.product.toString() === productId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;
    await cart.save();
    res.json(await cart.populate('items.product'));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;