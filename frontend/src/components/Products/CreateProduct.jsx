import React, { useState } from 'react';
import { BACKEND_URL } from '../../utils';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating product:', formData);
    // Add your product creation logic here
  };

  return (
    <div className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-rose-600 mb-6">
        Create Product
      </h2>
      
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-lg text-base outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Price (DA)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-lg text-base outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="px-3 py-2 border border-gray-300 rounded-lg text-base min-h-24 resize-y font-sans outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all"
            placeholder="Enter product description"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="px-2 py-2 border border-gray-300 rounded-lg bg-gray-50 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200"
          />
          {formData.image && (
            <img
              src={formData.image ? URL.createObjectURL(BACKEND_URL + formData.image) : ''}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-lg border border-gray-300 mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-rose-300 hover:bg-rose-400 text-black px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-colors mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;