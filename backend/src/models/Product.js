import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  sku: { type: String, unique: true },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 0 }, // Added for getTopProducts
  color: { type: String }, // Added for color-based filtering
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;