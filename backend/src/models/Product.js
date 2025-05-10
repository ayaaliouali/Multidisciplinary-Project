import mongoose from 'mongoose';
import  router from '../routes/auth.js';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }
});

const product = mongoose.model('Product', productSchema);
export default product;