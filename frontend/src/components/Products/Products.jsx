import React, { useEffect, useState } from 'react';
import ProductDetailModal from './ProductDetailModal';
import AddToCartButton from '../Cart/AddToCartButton';
import Img from '../../assets/item/cup.jpg';
import Img2 from '../../assets/item/cup1.jpg';
import Img3 from '../../assets/item/img.jpg';
import Img4 from '../../assets/item/img1.jpg';
import Img5 from '../../assets/item/img2.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img,
    title: 'Mirror with pink bows',
    rating: 4.5,
    price: 2500,
    color: "Pink",
    description: "A charming personalized gift box featuring a handmirror decorated with pink bow tiles and elegant design."
  },
  {
    id: 2,
    img: Img2,
    title: "Mirror with red hearts",
    price: 2500,
    rating: 4.5,
    color: "Red",
    description: "A beautiful handmirror decorated with red heart tiles and personalized with elegant white script."
  },
  {
    id: 3,
    img: Img3,
    title: "Large pink cup",
    price: 5000,
    rating: 4.7,
    color: "Pink",
    description: "A matching glass cup with a wooden lid and straw, customized with personalized design and heart accents."
  },
  {
    id: 4,
    img: Img4,
    title: "Large white cup",
    price: 5000,
    rating: 4.4,
    color: "White",
    description: "Elegant white cup with wooden lid, perfect for personalized gifts and daily use."
  },
  {
    id: 5,
    img: Img5,
    title: "Engagement frame",
    price: 3500,
    rating: 4.5,
    color: "Pink",
    description: "Beautiful engagement frame with personalized design, perfect for special occasions and memorable moments."
  },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, idx) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(40px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, 100 * idx);
    });
  }, []);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className='mt-14 mb-12'>
        <div className='container mx-auto px-4'>
          {/*header section*/}    
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-pink-950'>Top selling Products for you</p>
            <h1 className='text-3xl font-bold'>Products</h1>
            <p className='text-xs text-pink-900'>
              Here you find our best products to pick from them 
              your best gift for your loved ones or for yourself.
            </p>
          </div>
          
          {/*body section*/}  
          <div>
            <div className='grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6 bg-center'>
              {/*card section*/}
              {ProductsData.slice(0, visibleCount).map((data, idx) => (
                <div
                  className="product-card"
                  key={data.id}
                  style={{
                    opacity: 0,
                    transform: 'translateY(40px)',
                  }}
                  data-idx={idx}
                >
                  <img 
                    src={data.img} 
                    alt={data.title}
                    className='h-[220px] w-[150px] object-cover rounded-md'
                    style={{ display: 'inline-block', marginRight: '10px' }}
                  />
                  <div>
                    <h3 className='font-semibold text-pink-950'>{data.title}</h3>  
                    <p className='text-sm text-gray-500'>{data.price}da</p>
                    <div className='flex items-center gap-1 mb-2'>
                      <span className='text-yellow-500 mr-1'>★</span>
                      <span className='text-gray-500'>{data.rating}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className='flex flex-col gap-2'>
                      <AddToCartButton 
                        product={data} 
                        variant="secondary" 
                        size="small"
                      />
                      <button
                        className="px-2 py-1 rounded bg-pink-100 text-pink-900 text-xs hover:bg-pink-200 focus:outline-none transition-colors"
                        onClick={(e) => {
                          const card = e.currentTarget.closest('.product-card');
                          card.classList.add('clicked');
                          setTimeout(() => card.classList.remove('clicked'), 300);
                          handleViewProduct(data);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleCount < ProductsData.length && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-4 py-2 rounded text-white transition hover:opacity-90"
                  style={{ backgroundColor: '#EDAF9E' }}
                  onClick={() => setVisibleCount(prev => prev + 3)}
                >
                  Show More Products
                </button>
              </div>
            )}
          </div>
        </div>
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

export default Products;