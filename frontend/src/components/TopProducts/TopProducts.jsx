import React, { useEffect, useState } from 'react';
import AddToCartButton from '../Cart/AddToCartButton'; // Assuming you have this component
import { useAuth } from '../../context/AuthContext';
import ProductDetailModal from '../Products/ProductDetailModal';
import { BACKEND_URL } from '../../utils';

const TopProducts = () => {
  const { globalFetch } = useAuth(); // Get globalFetch from AuthContext
  const [products, setProducts] = useState([]); // State for fetched products
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 products
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [error, setError] = useState(null); // Error state
  const [visibleItems, setVisibleItems] = useState([]); // Animation state

  // Fetch top products on component mount
  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const data = await globalFetch('http://localhost:4000/api/products/top', {}, true);
        setProducts(data);
        setVisibleItems(Array(data.length).fill(false)); // Initialize animation state
      } catch (err) {
        setError(err.message || 'Failed to fetch top products');
        console.error('Error fetching top products:', err);
      }
    };

    fetchTopProducts();
  }, [globalFetch]);

  // Animation: Fade in on mount
  useEffect(() => {
    products.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, i * 150);
    });
  }, [products]);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center min-h-[20vh] text-center mb-2 mx-auto">
          <p className="text-sm text-pink-950 mb-1">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold mb-1">Best Products</h1>
          <p className="text-xs text-pink-900">
            Here you will find the best items that you will not find anywhere else.
          </p>
        </div>

        {/* Body section */}
        <div>
          {error && (
            <div className="text-center text-red-500 mb-4">{error}</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 place-items-center">
            {products.slice(0, visibleCount).map((data, i) => (
              <div
                key={data.id}
                className={`rounded-3xl bg-white dark:bg-gray-800 duration-300 group max-w-[300px] cursor-pointer transition-shadow focus-within:ring-4 focus-within:ring-[#C05263] hover:shadow-lg ${
                  visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transition:
                    'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
                  transitionDelay: `${i * 150}ms`,
                }}
                tabIndex={0}
              >
                {/* Image section */}
                <div className="overflow-hidden rounded-xl flex flex-col items-center">
                  <img
                    src={BACKEND_URL + data.image}
                    alt={data.title}
                    className="rounded-xl group-focus:scale-105 block mx-auto max-w-[140px] group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                {/* Details section */}
                <div className="p-4 pt-2 text-center">
                  <h2 className="text-lg font-semibold">{data.title}</h2>
                  <p className="text-pink-900">Price: {data.price} DZD</p>
                  <div className="flex justify-center items-center gap-1">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-500">{data.rating}</span>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="pb-4 flex flex-col items-center justify-center gap-2">
                  <AddToCartButton product={data} variant="secondary" size="small" />
                  <button
                    className="text-white font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ backgroundColor: '#C05263' }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#EDAF9E')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#C05263')}
                    onFocus={(e) => (e.currentTarget.style.backgroundColor = '#EDAF9E')}
                    onBlur={(e) => (e.currentTarget.style.backgroundColor = '#C05263')}
                    onClick={() => handleViewProduct(data)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < products.length && (
            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 rounded text-white transition hover:opacity-90"
                style={{ backgroundColor: '#EDAF9E' }}
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Show More Products
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TopProducts;