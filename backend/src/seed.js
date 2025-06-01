import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    title: 'Mirror with pink bows',
    price: 2500,
    rating: 4.5,
    color: 'Pink',
    description: 'A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/mirror_pink_bows.jpg',
  },
  {
    title: 'Mirror with red hearts',
    price: 2500,
    rating: 4.5,
    color: 'Red',
    description: 'A beautiful handmirror decorated with red heart tiles and personalized with elegant white script.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/mirror_red_hearts.jpg',
  },
  {
    title: 'Large pink cup',
    price: 5000,
    rating: 4.7,
    color: 'Pink',
    description: 'A matching glass cup with a wooden lid and straw, customized with personalized design and heart accents.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/large_pink_cup.jpg',
  },
  {
    title: 'Large white cup',
    price: 5000,
    rating: 4.4,
    color: 'White',
    description: 'Elegant white cup with wooden lid, perfect for personalized gifts and daily use.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/large_white_cup.jpg',
  },
  {
    title: 'Engagement frame',
    price: 3500,
    rating: 4.5,
    color: 'Pink',
    description: 'Beautiful engagement frame with personalized design, perfect for special occasions and memorable moments.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/engagement_frame.jpg',
  },
  {
    title: 'Blue Hearts Box',
    price: 4500,
    rating: 4.7,
    color: 'Blue',
    description: 'A beautiful box decorated with blue heart tiles, perfect for gifting.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/blue_hearts_box.jpg',
  },
  {
    title: 'Success Frame',
    price: 2000,
    rating: 4.2,
    color: 'Pink',
    description: 'A frame to celebrate success with personalized design.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/success_frame.jpg',
  },
  {
    title: 'Red Hearts Box',
    price: 4500,
    rating: 4.5,
    color: 'Red',
    description: 'A beautiful box decorated with red heart tiles, perfect for gifting.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/red_hearts_box.jpg',
  },
  {
    title: 'Custom Mirror Set',
    price: 4000,
    rating: 4.6,
    color: 'Pink',
    description: 'Complete mirror set with custom designs and elegant packaging.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v123456-com/mirror_set.jpg',
  },
  {
    title: 'Heart Collection Mirror',
    price: 2800,
    rating: 4.3,
    color: 'Red',
    description: 'Beautiful heart-themed mirror perfect for romantic gifts.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/heart_mirror.jpg',
  },
  {
    title: 'Designer Cup Large',
    price: 5500,
    rating: 4.8,
    color: 'Pink',
    description: 'Premium designer cup with custom engravings and wooden accessories.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/designer_cup.jpg',
  },
  {
    title: 'Elegant White Cup',
    price: 5200,
    rating: 4.5,
    color: 'White',
    description: 'Sophisticated white cup with personalized designs, ideal for gifts.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/elegant_white_cup.jpg',
  },
  {
    title: 'Birthday Frame',
    price: 3600,
    rating: 4.7,
    color: 'Pink',
    description: 'Customizable engagement frame with elegant design, perfect for special moments.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/birthday_frame.jpg',
  },
  {
    title: 'Birthday Ceramic Frame',
    price: 3000,
    rating: 4.2,
    color: 'White',
    description: 'Set of ceramic frame design, perfect for gifting.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/birthday_ceramic_frame.jpg',
  },
  {
    title: 'Vintage Box',
    price: 4500,
    rating: 4.4,
    color: 'Red',
    description: 'Vintage-style Box with intricate designs, ideal for collectors.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/vintage_box.jpg',
  },
  {
    title: 'Floral Pattern Frame',
    price: 3200,
    rating: 4.1,
    color: 'Red and Yellow',
    description: 'Cup with beautiful floral patterns, perfect for nature lovers.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/floral_frame.jpg',
  },
  {
    title: 'Customizable page saver',
    price: 3700,
    rating: 4.6,
    color: 'Pink',
    description: 'Perfect gift for Book lovers.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/page_saver.jpg',
  },
  {
    title: 'Artistic Glass Cup',
    price: 4800,
    rating: 4.9,
    color: 'Blue',
    description: 'Handcrafted glass cup with artistic designs, perfect for special occasions.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/artistic_glass_cup.jpg',
  },
  {
    title: 'Elegant Wooden Frame',
    price: 5000,
    rating: 4.8,
    color: 'Brown',
    description: 'Elegant wooden Frame with personalized engravings, ideal for gifts.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/wooden_frame.jpg',
  },
  {
    title: 'Luxury Name Frame',
    price: 1200,
    rating: 4.9,
    color: 'White',
    description: 'Luxury Name frame with custom designs, perfect for lovers.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/luxury_name_frame.jpg',
  },
  {
    title: 'Birthday Frame',
    price: 3500,
    rating: 4.5,
    color: 'Black',
    description: 'Customizable Birthday Frame with your birthday and name.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/birthday_frame_2.jpg',
  },
  {
    title: 'Ceramic Graduation Frame',
    price: 4000,
    rating: 4.3,
    color: 'Red',
    description: 'If you have a graduated friend or a member of your family you find the suitable gift.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/graduation_frame.jpg',
  },
  {
    title: 'Custom Box',
    price: 3800,
    rating: 4.6,
    color: 'Blue',
    description: 'Perfect cute Box with things you choose to customize.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/custom_box.jpg',
  },
  {
    title: 'Artisan Mirror and Cup box',
    price: 6000,
    rating: 4.7,
    color: 'Red',
    description: 'Handcrafted artisan cup with unique designs, perfect for collectors.',
    image: 'https://res.cloudinary.com/dpyelu966/image/upload/v1234567890/artisan_mirror_cup.jpg',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Inserted products');

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();