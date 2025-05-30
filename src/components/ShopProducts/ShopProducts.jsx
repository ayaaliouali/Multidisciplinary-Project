import React from 'react';
import { Navbar } from '../Navbar/Navbar';

import img1 from '../../assets/item/img.jpg';
import img2 from '../../assets/item/img1.jpg';
import img3 from '../../assets/item/img2.jpg';
import cup from '../../assets/item/cup.jpg';
import cup1 from '../../assets/item/cup1.jpg';
import img12 from '../../assets/item/img12.jpg';
import img13 from '../../assets/item/img13.jpg';
import img14 from '../../assets/item/img14.jpg';
import img15 from '../../assets/item/img15.jpg';
import img16 from '../../assets/item/img16.jpg';
import img17 from '../../assets/item/img17.jpg';
import img18 from '../../assets/item/img18.jpg';
import img19 from '../../assets/item/img19.jpg';
import img20 from '../../assets/item/img20.jpg';
import { ShoppingCart } from "lucide-react";
// Make sure your app is wrapped in <BrowserRouter> in your main entry file (e.g., index.js or App.js)
import { Link } from 'react-router-dom'
<Link to="/shop">Shop</Link>
const ShopProducts = () => {

const products = [
    {
        id: 1,
        image: img1,
        price: "5000 da",
        description: "Large pink cup",
    },
    {
        id: 2,
        image: img2,
        price: "5000 da",
        description: "Large white cup",
    },
    {
        id: 3,
        image: img3,
        price: "2500 da",
        description: "Flower Frame",
    },
    {
        id: 4,
        image: cup,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 5,
        image: cup1,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 6,
        image: img12,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    }
    ,
    {
        id: 7,
        image: img13,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 8,
        image: img14,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 9,
        image: img15,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 10,
        image: img16,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 11,
        image: img17,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 12,
        image: img18,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 13,
        image: img19,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    },
    {
        id: 14,
        image: img20,
        price: "1500 da",
        description: "Elegant silver necklace with pendant",
    }
];

// Add this style object to wrap your component's content
const crimsonFont = { fontFamily: "'Crimson Text', serif" };

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };

return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
            <div className="container mx-auto px-4 py-8">
                <div style={{ marginTop: "3.5rem" }}>
                    <h1
                        style={{
                            fontFamily: "'Crimson Text', serif",
                            textAlign: "center",
                            fontSize: "2.7rem",
                            fontWeight: 700,
                            marginBottom: "2.5rem",
                            color: "#C05263",
                            letterSpacing: "1px"
                        }}
                    >
                        Our Products
                    </h1>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="aspect-square bg-gray-100">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.description}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <div className="text-lg font-semibold text-gray-800 mb-2">{product.price}</div>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    style={{ backgroundColor: "#EDAF9E" }}
                                    className="w-full text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
                                    onMouseOver={e => e.currentTarget.style.backgroundColor = "#C05263"}
                                    onMouseOut={e => e.currentTarget.style.backgroundColor = "#EDAF9E"}
                                >
                                    <ShoppingCart size={16} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap');
        </style>
    </div>
);
};

export default ShopProducts;
