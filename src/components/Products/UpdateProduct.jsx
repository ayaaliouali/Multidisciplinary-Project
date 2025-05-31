import React, { useState } from 'react';
import ProductCard from '../Products/ProductCard';
import ProductDetailModal from '../Products/ProductDetailModal';

const UpdateProduct = () => {
  // Sample products data with correct structure for ProductCard
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Mirror with pink bows', // Changed from 'name' to 'title'
      price: 2500,
      img: '/api/placeholder/150/220', // Changed from 'image' to 'img'
      rating: 4.5,
      color: "Pink"
    },
    {
      id: 2,
      title: 'Mirror with red hearts',
      price: 2500,
      img: '/api/placeholder/150/220',
      rating: 4.5,
      color: "Red"
    },
    {
      id: 3,
      title: 'Large pink cup',
      price: 5000,
      img: '/api/placeholder/150/220',
      rating: 4.7,
      color: "Pink"
    },
    {
      id: 4,
      title: 'Large white cup',
      price: 5000,
      img: '/api/placeholder/150/220',
      rating: 4.4,
      color: "White"
    },
    {
      id: 5,
      title: 'Engagement frame',
      price: 3500,
      img: '/api/placeholder/150/220',
      rating: 4.5,
      color: "Pink"
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    color: ''
  });

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product.id);
    setEditForm({
      title: product.title,
      price: product.price.toString(),
      color: product.color
    });
  };

  const handleSaveEdit = () => {
    setProducts(prev => prev.map(product => 
      product.id === editingProduct 
        ? { 
            ...product, 
            title: editForm.title,
            price: parseInt(editForm.price),
            color: editForm.color
          }
        : product
    ));
    setEditingProduct(null);
    setEditForm({ title: '', price: '', color: '' });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditForm({ title: '', price: '', color: '' });
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(product => product.id !== productId));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-rose-600 mb-6">
          Update Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map(product => (
            <div key={product.id} className="relative">
              {editingProduct === product.id ? (
                // Edit Form
                <div className="bg-white p-4 rounded-lg border-2 border-rose-300">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={editForm.title}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price (DA)
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={editForm.price}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        value={editForm.color}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleSaveEdit}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Product Card with Action Buttons
                <div className="relative">
                  <ProductCard
                    product={product}
                    onViewProduct={handleViewProduct}
                  />
                  
                  {/* Action Buttons Overlay */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-md text-xs font-medium transition-colors shadow-md"
                      title="Edit Product"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md text-xs font-medium transition-colors shadow-md"
                      title="Delete Product"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No products available
          </div>
        )}
        
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-colors"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete all products?')) {
              setProducts([]);
            }
          }}
        >
          Delete All Products
        </button>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default UpdateProduct;