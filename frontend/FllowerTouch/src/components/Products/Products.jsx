import React from 'react';
import Img from '../../assets/item/cup.jpg';
import Img2 from '../../assets/item/cup1.jpg';
import Img3 from '../../assets/item/img.jpg';
import Img4 from '../../assets/item/img1.jpg';
import Img5 from '../../assets/item/img2.jpg';
import { useEffect } from 'react';

// Double-check that the above image paths and filenames are correct and that the files exist in your project.
// If you are using Create React App or Vite, the import paths should be relative to the src folder.




const ProductsData = [
  {
    id: 1,
    img: Img,
    title: 'Mirror with pink bows',
    rating: 4.5,
    price: 2500,
    
  },
  {
    id: 2,
    img: Img2,
    title: "Mirror with red hearts",
    price: 2500,
    rating: 4.5,
    color: "Red",
    
  },
  {
    id: 3,
    img: Img3,
    title: "Large pink cup",
    price: 5000,
    rating: 4.7,
    color: "brown",
    
  },
  {
    id: 4,
    img: Img4,
    title: "Large white cup",
    price: 5000,
    rating: 4.4,
    color: "Yellow",
    
  },
  
  {
    id: 5,
    img: Img5,
    title: "engagment frame",
    price: 3500,
    rating: 4.5,
    color: "Pink",
    
  },
  
];



const Products = () => {
 
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

  const [visibleCount, setVisibleCount] = React.useState(5);

  return (
    <div className='mt-14 mb-12'>
      <div className='container mx-auto px-4'>
        {/*header section*/}    
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-pink-950'>Top selling Products for you</p>
            <h1 className='text-3xl font-bold'>Products</h1>
            <p  className='text-xs text-pink-900'>Here you find our best products to pick from them 
              your best gift for your loved ones or for yourself.
            </p>
        </div>
        {/*body section*/}  
        <div>
          <div
            className='grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6 bg-center'>
            {/*card section*/}
            {
              ProductsData.slice(0, visibleCount).map((data, idx) => (
                <div
                  className="product-card"
                  key={data.id}
                  style={{
                    opacity: 0,
                    transform: 'translateY(40px)',
                  }}
                  data-idx={idx}
                >
                  <img src={data.img} alt="" 
                    className='h-[220px] w-[150px] object-cover rounded-md'
                    style={{ display: 'inline-block', marginRight: '10px' }}
                  />
                  <div>
                    <h3 className='font-semibold  text-pink-950'>{data.title}</h3>  
                    <p className='text-sm text-gray-500 '>{data.price}da</p>
                    <div className='flex items-center gap-1  '>
                      <span className='text-yellow-500 mr-1'>★</span>
                      <span className='text-gray-500'>{data.rating}</span>
                      <button
                        className="ml-2 px-2 py-1 rounded bg-pink-100 text-pink-900 text-xs hover:bg-pink-200 focus:outline-none"
                        onClick={e => {
                          const card = e.currentTarget.closest('.product-card');
                          card.classList.add('clicked');
                          setTimeout(() => card.classList.remove('clicked'), 300);
                            setSelectedProduct(data);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {visibleCount < ProductsData.length && (
            <div className="flex justify-center mt-8">
              <button
                className="px-4 py-2 rounded text-white transition"
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
  )
}
export default Products;
