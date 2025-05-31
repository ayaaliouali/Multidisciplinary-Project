import React from 'react';
import { X } from 'lucide-react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-pink-200 p-6 rounded-lg w-full max-w-md mt-20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Product Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-3">
          <div><strong>Name:</strong> {product.name}</div>
          <div><strong>Price:</strong> ${product.price}</div>
          <div><strong>Category:</strong> {product.category}</div>
          <div><strong>Stock:</strong> {product.stock}</div>
          <div><strong>SKU:</strong> {product.sku}</div>
          <div><strong>Featured:</strong> {product.featured ? 'Yes' : 'No'}</div>
          {product.description && (
            <div><strong>Description:</strong> {product.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;