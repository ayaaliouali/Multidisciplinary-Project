import React from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { items, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = 500; // Fixed shipping cost
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Here you would integrate with your payment system
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-pink-950 mb-6">Order Summary</h2>
      
      {/* Order Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({items.length} items)</span>
          <span className="font-semibold">{subtotal.toLocaleString()}da</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold">{shipping.toLocaleString()}da</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-bold text-pink-950">
            <span>Total</span>
            <span>{total.toLocaleString()}da</span>
          </div>
        </div>
      </div>

      
        <div className="space-y-3">
          <button
            onClick={handleCheckout}
            className="w-full text-white py-3 px-4 rounded-lg transition-colors font-semibold"
            style={{
              backgroundColor: '#C05263',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#EDAF9E')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#C05263')}
          >
            Proceed to Checkout
          </button>
          
          <button
            onClick={clearCart}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Clear Cart
          </button>
          
          <a
            href="/shop"
            className="block w-full text-center py-2 px-4 rounded-lg hover:bg-pink-50 transition-colors"
            style={{
          border: '1px solid #C05263',
          color: '#000',
            }}
          >
            Continue Shopping
          </a>
        </div>

        {/* Promo Code Section */}
      <div className="mt-6 pt-6 border-t">
        <h3 className="font-semibold text-gray-800 mb-3">Promo Code</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          />
          <button
            className="px-4 py-2 text-white rounded-lg transition-colors"
            style={{
              backgroundColor: '#C05263',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#EDAF9E')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#C05263')}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;