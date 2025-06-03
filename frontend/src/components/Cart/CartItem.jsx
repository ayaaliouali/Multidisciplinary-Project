import React from 'react';
import { useCart } from '../../context/CartContext';
import { BACKEND_URL } from '../../utils';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={BACKEND_URL + item.img}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="font-semibold text-pink-950">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.color}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-500">{item.rating}</span>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-semibold text-pink-950">{(item.price * item.quantity).toLocaleString()}da</p>
        <p className="text-sm text-gray-500">{item.price}da each</p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors p-2"
        title="Remove item"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;