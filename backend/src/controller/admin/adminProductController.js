import Product from '../../models/Product.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock, sku, featured, image } = req.body;
    let imagePath = '';

    if (image) {
      // Handle base64 image
      const matches = image.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ message: 'Invalid image format' });
      }
      const extension = matches[1]; // e.g., 'png', 'jpeg'
      const base64Data = matches[2];
      if (!['png', 'jpeg', 'jpg'].includes(extension)) {
        return res.status(400).json({ message: 'Only PNG, JPEG, or JPG images are allowed' });
      }

      const filename = `${uuidv4()}.${extension}`;
      imagePath = `/public/images/${filename}`;
      const filePath = path.join(__dirname, '../../../public/images', filename);

      // Decode and save image
      const buffer = Buffer.from(base64Data, 'base64');
      await fs.writeFile(filePath, buffer);
    }

    const productData = {
      name,
      price: parseFloat(price),
      description,
      image: imagePath,
      category,
      stock: parseInt(stock),
      sku: sku || `SKU-${uuidv4().slice(0, 8)}`,
      featured: featured === 'true' || featured === true,
    };

    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock, sku, featured, image } = req.body;
    let updateData = {
      name,
      price: parseFloat(price),
      description,
      category,
      stock: parseInt(stock),
      sku,
      featured: featured === 'true' || featured === true,
      updatedAt: Date.now(),
    };

    if (image) {
      // Delete old image if exists
      const product = await Product.findById(req.params.id);
      if (product.image) {
        const oldImagePath = path.join(__dirname, '../../', product.image);
        try {
          await fs.unlink(oldImagePath);
        } catch (err) {
          console.error('Failed to delete old image:', err.message);
        }
      }

      // Handle new base64 image
      const matches = image.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ message: 'Invalid image format' });
      }
      const extension = matches[1];
      const base64Data = matches[2];
      if (!['png', 'jpeg', 'jpg'].includes(extension)) {
        return res.status(400).json({ message: 'Only PNG, JPEG, or JPG images are allowed' });
      }

      const filename = `${uuidv4()}.${extension}`;
      updateData.image = `/public/images/${filename}`;
      const filePath = path.join(__dirname, '../../public/images', filename);

      // Decode and save image
      const buffer = Buffer.from(base64Data, 'base64');
      await fs.writeFile(filePath, buffer);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.image) {
      const imagePath = path.join(__dirname, '../../', product.image);
      try {
        await fs.unlink(imagePath);
      } catch (err) {
        console.error('Failed to delete image:', err.message);
      }
    }
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Placeholder for other routes
export const getTopProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).limit(5);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getShopProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};