import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';

const Cart = () => {
  const { items, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-pink-950 mb-8">Shopping Cart</h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-gray-500 text-lg mb-4">Your cart is empty</div>
              <p className="text-gray-400 mb-6">Add some products to get started!</p>
              <a 
                href="/shop"
                className="inline-block px-6 py-3 rounded-lg transition-colors"
                style={{
                  backgroundColor: '#C05263',
                  color: '#fff'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#EDAF9E'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#C05263'}
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-pink-950 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-pink-950 mb-6">Cart Items ({items.length})</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;