import dotenv from 'dotenv';
import cloudinary from './lib/cloudinary.js';
import fs from 'fs';
import path from 'path';

dotenv.config();

const uploadImages = async () => {
  const imageFolder = path.join(__dirname, '../../frontend/src/assets/item');
  const images = fs.readdirSync(imageFolder).filter(file => file.endsWith('.jpg'));

  for (const image of images) {
    try {
      const result = await cloudinary.uploader.upload(path.join(imageFolder, image), {
        folder: 'products',
      });
      console.log(`Uploaded ${image}: ${result.secure_url}`);
    } catch (error) {
      console.error(`Error uploading ${image}:`, error);
    }
  }
};

uploadImages();