import React from 'react';
import { X } from 'lucide-react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Product Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-3">
          {product.image && (
            <img
              src={`http://localhost:4000${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
          )}
          <div><strong>Name:</strong> {product.name}</div>
          <div><strong>Price:</strong> ${product.price.toFixed(2)}</div>
          <div><strong>Category:</strong> {product.category}</div>
          <div><strong>Stock:</strong> {product.stock}</div>
          <div><strong>SKU:</strong> {product.sku}</div>
          <div><strong>Featured:</strong> {product.featured ? 'Yes' : 'No'}</div>
          {product.description && (
            <div><strong>Description:</strong> {product.description}</div>
          )}
          <div><strong>Created At:</strong> {new Date(product.createdAt).toLocaleDateString()}</div>
          <div><strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;