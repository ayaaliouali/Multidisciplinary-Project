
import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  try {
    const { pick, random } = req.query;
    let result = [...ProductsData];
    if (pick && !isNaN(parseInt(pick))) {
      const count = parseInt(pick);
      if (count > 0 && count <= result.length) {
        result = result.slice(0, count);
      } else {
        return res.status(400).json({ message: `Pick value must be between 1 and ${result.length}` });
      }
    }
    if (random === 'true' && result.length > 0) {
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]; // Shuffle array
      }
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTopProducts = async (req, res) => {
  try {
    console.log('TopProductsData: ', TopProductsData)
    res.json(TopProductsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export  const getShopProducts = async (req, res) => {
  try {
    const { pick, random } = req.query;
    let result = [...ShopProductsData];
    if (pick && !isNaN(parseInt(pick))) {
      const count = parseInt(pick);
      if (count > 0 && count <= result.length) {
        result = result.slice(0, count);
      } else {
        return res.status(400).json({ message: `Pick value must be between 1 and ${result.length}` });
      }
    }
    if (random === 'true' && result.length > 0) {
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]; // Shuffle array
      }
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const ProductsData = [
  {
    id: 1,
    img: "/assets/item/cup.jpg",
    title: "Mirror with pink bows",
    rating: 4.5,
    price: 2500,
    color: "Pink",
    description: "A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design."
  },
  {
    id: 2,
    img: "/assets/item/cup1.jpg",
    title: "Mirror with red hearts",
    price: 2500,
    rating: 4.5,
    color: "Red",
    description: "A beautiful handmirror decorated with red heart tiles and personalized with elegant white script."
  },
  {
    id: 3,
    img: "/assets/item/img.jpg",
    title: "Large pink cup",
    price: 5000,
    rating: 4.7,
    color: "Pink",
    description: "A matching glass cup with a wooden lid and straw, customized with personalized design and heart accents."
  },
  {
    id: 4,
    img: "/assets/item/img1.jpg",
    title: "Large white cup",
    price: 5000,
    rating: 4.4,
    color: "White",
    description: "Elegant white cup with wooden lid, perfect for personalized gifts and daily use."
  },
  {
    id: 5,
    img: "/assets/item/img2.jpg",
    title: "Engagement frame",
    price: 3500,
    rating: 4.5,
    color: "Pink",
    description: "Beautiful engagement frame with personalized design, perfect for special occasions and memorable moments."
  },
];

const TopProductsData = [
  {
    id: 9,
    img: "/assets/item/img3.jpg",
    title: "Blue Hearts Box",
    price: 4500,
    rating: 4.7,
    description: "A beautifully crafted gift box adorned with blue heart designs, perfect for special occasions.",
  },
  {
    id: 10,
    img: "/assets/item/cup.jpg",
    title: "Red Hearts Box",
    price: 4500,
    rating: 4.5,
    description: "A stunning red hearts gift box, ideal for romantic gifts or celebrations.",
  },
  {
    id: 12,
    img: "/assets/item/cup1.jpg",
    title: "Success Frame",
    price: 2000,
    rating: 4.2,
    description: "A personalized success frame to celebrate achievements and milestones.",
  },
];

const ShopProductsData = [
  {
    id: 1,
    img: "/assets/item/cup.jpg",
    title: "Mirror with pink bows",
    rating: 4.5,
    price: 2500,
    color: "Pink",
    description: "A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design.",
  },
  {
    id: 2,
    img: "/assets/item/cup1.jpg",
    title: "Mirror with red hearts",
    price: 2500,
    rating: 4.5,
    color: "Red",
    description: "A beautiful handmirror decorated with red heart tiles and personalized with elegant white script.",
  },
  {
    id: 3,
    img: "/assets/item/img.jpg",
    title: "Large pink cup",
    price: 5000,
    rating: 4.7,
    color: "Pink",
    description: "A matching glass cup with a wooden lid and straw, customized with personalized design and heart accents.",
  },
  {
    id: 4,
    img: "/assets/item/img1.jpg",
    title: "Large white cup",
    price: 5000,
    rating: 4.4,
    color: "White",
    description: "Elegant white cup with wooden lid, perfect for personalized gifts and daily use.",
  },
  {
    id: 5,
    img: "/assets/item/img2.jpg",
    title: "Engagement frame",
    price: 3500,
    rating: 4.5,
    color: "Pink",
    description: "Beautiful engagement frame with personalized design, perfect for special occasions and memorable moments.",
  },
  {
    id: 6,
    img: "/assets/item/cup.jpg",
    title: "Custom Mirror Set",
    price: 4000,
    rating: 4.6,
    color: "Pink",
    description: "Complete mirror set with custom designs and elegant packaging.",
  },
  {
    id: 7,
    img: "/assets/item/cup1.jpg",
    title: "Heart Collection Mirror",
    price: 2800,
    rating: 4.3,
    color: "Red",
    description: "Beautiful heart-themed mirror perfect for romantic gifts.",
  },
  {
    id: 8,
    img: "/assets/item/img.jpg",
    title: "Designer Cup Large",
    price: 5500,
    rating: 4.8,
    color: "Pink",
    description: "Premium designer cup with custom engravings and wooden accessories.",
  },
  {
    id: 9,
    img: "/assets/item/img1.jpg",
    title: "Elegant White Cup",
    price: 5200,
    rating: 4.5,
    color: "White",
    description: "Sophisticated white cup with personalized designs, ideal for gifts.",
  },
  {
    id: 10,
    img: "/assets/item/img2.jpg",
    title: "Birthday Frame",
    price: 3600,
    rating: 4.7,
    color: "Pink",
    description: "Customizable engagement frame with elegant design, perfect for special moments.",
  },
  {
    id: 11,
    img: "/assets/item/img3.jpg",
    title: "Birthday Ceramic Frame",
    price: 3000,
    rating: 4.2,
    color: "White",
    description: "Set of ceramic frame design, perfect for gifting.",
  },
  {
    id: 12,
    img: "/assets/item/img11.jpg",
    title: "Vintage Box",
    price: 4500,
    rating: 4.4,
    color: "Red",
    description: "Vintage-style Box with intricate designs, ideal for collectors.",
  },
  {
    id: 13,
    img: "/assets/item/img12.jpg",
    title: "Floral Pattern Frame",
    price: 3200,
    rating: 4.1,
    color: "Red and Yellow",
    description: "Cup with beautiful floral patterns, perfect for nature lovers.",
  },
  {
    id: 14,
    img: "/assets/item/img13.jpg",
    title: "Customizable page saver",
    price: 3700,
    rating: 4.6,
    color: "Pink",
    description: "Perfect gift for Book lovers.",
  },
  {
    id: 15,
    img: "/assets/item/img14.jpg",
    title: "Artistic Glass Cup",
    price: 4800,
    rating: 4.9,
    color: "Blue",
    description: "Handcrafted glass cup with artistic designs, perfect for special occasions.",
  },
  {
    id: 16,
    img: "/assets/item/img15.jpg",
    title: "Elegant Wooden Frame",
    price: 5000,
    rating: 4.8,
    color: "Brown",
    description: "Elegant wooden Frame with personalized engravings, ideal for gifts.",
  },
  {
    id: 17,
    img: "/assets/item/img16.jpg",
    title: "Luxury Name Frame",
    price: 1200,
    rating: 4.9,
    color: "White",
    description: "Luxury Name frame with custom designs, perfect for lovers.",
  },
  {
    id: 18,
    img: "/assets/item/img17.jpg",
    title: "Birthday Frame",
    price: 3500,
    rating: 4.5,
    color: "Black",
    description: "Customizable Birthday Frame with your birthday and name.",
  },
  {
    id: 19,
    img: "/assets/item/img18.jpg",
    title: "Ceramic Graduation Frame",
    price: 4000,
    rating: 4.3,
    color: "Red",
    description: "if uou have a graduated friend or a member of your familly you find the suitble gift.",
  },
  {
    id: 20,
    img: "/assets/item/img19.jpg",
    title: "Custom Box",
    price: 3800,
    rating: 4.6,
    color: "Blue",
    description: "perfect cute Box xuth things you choose to customize.",
  },
  {
    id: 21,
    img: "/assets/item/img20.jpg",
    title: "Artisan Mirror and Cup box",
    price: 6000,
    rating: 4.7,
    color: "Red",
    description: "Handcrafted artisan cup with unique designs, perfect for collectors.",
  },
];







