// controllers/productController.js
import Product from '../models/Product.js';

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const { pick, random } = req.query;
    const totalDocs = await Product.countDocuments();

    if (totalDocs === 0) {
      return res.status(404).json({ message: 'No products found in the database' });
    }

    let products;
    const count = pick ? parseInt(pick) : null;

    if (random === 'true' && count && !isNaN(count)) {
      if (count <= 0) {
        return res.status(400).json({ message: 'Pick value must be a positive integer' });
      }
      const sampleSize = Math.min(count, totalDocs); // Use available documents if pick > totalDocs
      products = await Product.aggregate([
        { $sample: { size: sampleSize } }
      ]);
      if (count > totalDocs) {
        return res.json({
          message: `Requested ${count} products, but only ${totalDocs} available`,
          data: products
        });
      }
    } else if (random === 'true') {
      products = await Product.aggregate([
        { $sample: { size: totalDocs } }
      ]);
    } else if (count && !isNaN(count)) {
      if (count <= 0) {
        return res.status(400).json({ message: 'Pick value must be a positive integer' });
      }
      products = await Product.find().limit(Math.min(count, totalDocs)).exec();
      if (count > totalDocs) {
        return res.json({
          message: `Requested ${count} products, but only ${totalDocs} available`,
          data: products
        });
      }
    } else {
      products = await Product.find().exec();
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get top-rated products
export const getTopProducts = async (req, res) => {
  try {
    const products = await Product.find({ price: { $gt: 1000} }).exec();
    
    if (!products.length) {
      return res.status(404).json({ message: 'No top-rated products found' });
    }
    
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get shop products (reuses getAllProducts)
export const getShopProducts = async (req, res) => {
  try {
    return await getAllProducts(req, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};