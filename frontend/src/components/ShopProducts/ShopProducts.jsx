import React, { useEffect, useState } from 'react';
import AddToCartButton from '../Cart/AddToCartButton';
import ProductDetailModal from '../Products/ProductDetailModal';
import { useAuth } from '../../context/AuthContext';

const ShopProducts = () => {
  const { globalFetch } = useAuth(); // Get globalFetch from AuthContext
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    color: 'all',
    rating: 'all',
  });
  const [sortBy, setSortBy] = useState('name');
  const [visibleItems, setVisibleItems] = useState([]); // For animations

  // Fetch products on mount with optional query parameters
  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        const data = await globalFetch('http://localhost:4000/api/products/shop?pick=10&random=true', {}, true);
        setProducts(data);
        setFilteredProducts(data);
        setVisibleItems(Array(data.length).fill(false));
      } catch (err) {
        setError(err.message || 'Failed to fetch shop products');
        console.error('Error fetching shop products:', err);
      }
    };
    fetchShopProducts();
  }, [globalFetch]);

  // Animation: Fade in on mount
  useEffect(() => {
    filteredProducts.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, i * 150);
    });
  }, [filteredProducts]);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }

    if (filters.color !== 'all') {
      filtered = filtered.filter((product) => product.color.toLowerCase() === filters.color.toLowerCase());
    }

    if (filters.rating !== 'all') {
      const minRating = Number.parseFloat(filters.rating);
      filtered = filtered.filter((product) => product.rating >= minRating);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    setFilteredProducts(filtered);
  }, [filters, sortBy, products]);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold" style={{ color: '#C05263' }}>
              Our Shop
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of handcrafted gifts and personalized items. Find the perfect gift for
              your loved ones or treat yourself to something special.
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="text-center text-red-500 mb-4">{error}</div>
          )}

          {/* Filters and Sort */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: '#C05263' }}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-3000">0 - 3,000da</option>
                    <option value="3000-5000">3,000 - 5,000da</option>
                    <option value="5000-10000">5,000da+</option>
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: '#C05263' }}
                  >
                    <option value="all">All Colors</option>
                    <option value="pink">Pink</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="black">Black</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    style={{ borderColor: '#C05263' }}
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5★ & up</option>
                    <option value="4.0">4.0★ & up</option>
                    <option value="3.5">3.5★ & up</option>
                  </select>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  style={{ borderColor: '#C05263' }}
                >
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div className="relative">
                  <img
                    src={product.img || '/placeholder.svg'}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                    {product.color}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold mb-2" style={{ color: '#C05263' }}>
                    {product.price.toLocaleString()}da
                  </p>

                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-600 text-sm">{product.rating}</span>
                  </div>

                  <div className="space-y-2">
                    <AddToCartButton
                      product={product}
                      variant="primary"
                      size="medium"
                      className="w-full"
                      style={{
                        backgroundColor: '#C05263',
                        borderColor: '#C05263',
                        color: 'white',
                      }}
                    />
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="w-full px-4 py-2 text-sm border rounded hover:bg-opacity-10 transition-colors"
                      style={{
                        borderColor: '#C05263',
                        color: '#C05263',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#C0526310';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No products found</div>
              <p className="text-gray-400">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ShopProducts;