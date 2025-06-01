// ProductCard.js
import React from 'react';
import { Edit2, Trash2, Star, Package } from 'lucide-react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      onDelete(product.id);
    }
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600 bg-red-100' };
    if (stock <= 5) return { text: 'Low Stock', color: 'text-yellow-600 bg-yellow-100' };
    return { text: 'In Stock', color: 'text-green-600 bg-green-100' };
  };

  const stockStatus = getStockStatus(product.stock);
  const createdDate = product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'N/A';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Package size={48} />
          </div>
        )}
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        )}
        
        {/* Stock Status Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
          {stockStatus.text}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-green-600 mb-2">
            ${product.price.toFixed(2)}
          </p>
        </div>
        
        {/* Product Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Category:</span>
            <span className="font-medium text-gray-800">{product.category}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Stock:</span>
            <span className="font-medium text-gray-800">{product.stock} units</span>
          </div>
          
          {product.sku && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">SKU:</span>
              <span className="font-medium text-gray-800 text-xs">{product.sku}</span>
            </div>
          )}
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Added:</span>
            <span className="font-medium text-gray-800 text-xs">{createdDate}</span>
          </div>
        </div>
        
        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {product.description}
          </p>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="flex-1 bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Edit2 size={16} />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white p-2.5 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;