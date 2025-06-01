// seed.js
import mongoose from 'mongoose';
import Product from './models/Product.js';

const ShopProductsData = [
  {
    id: 1,
    image: '/assets/item/cup.jpg',
    name: 'Mirror with pink bows',
    rating: 4.5,
    price: 2500,
    color: 'Pink',
    description: 'A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design.',
  },
  // ... add all other products from ShopProductsData ...
];

const seedProducts = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database');
    await Product.deleteMany({});
    await Product.insertMany(ShopProductsData);
    console.log('Products seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding products:', err);
  }
};

seedProducts();