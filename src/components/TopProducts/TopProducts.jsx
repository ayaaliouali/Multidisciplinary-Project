import React from "react";

import IMG3 from "../../assets/item/img3.jpg";
import IMG4 from "../../assets/item/cup.jpg";
import IMG5 from "../../assets/item/cup1.jpg";


const ProductsData = [
    
    {
        id: 9,
        img: IMG3,
        title: "Blue Hearts Box",
        price: 4500,
        rating: 4.7,
        
    },
    {
        id: 12,
        img: IMG5,
        title: "Success Frame",
        price: 2000,
        rating: 4.2,
        
    },
    {
        id: 10,
        img: IMG4,
        title: "Red Hearts Box",
        price: 4500,
        rating: 4.5,
        
    },
   
];


const TopProducts = () => {
    // Animation: Fade in on mount using React and Tailwind CSS
    const [mounted, setMounted] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState(
        Array(ProductsData.length).fill(false)
    );
    const itemRefs = React.useRef([]);

    React.useEffect(() => {
        setMounted(true);
        // Animate each item in sequence
        ProductsData.forEach((_, i) => {
            setTimeout(() => {
                setVisibleItems(prev => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                });
            }, i * 150);
        });
    }, []);

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4">
            {/* header section */}
            <div className="flex flex-col items-center justify-center min-h-[20vh] text-center mb-2 mx-auto">
                <p className="text-sm text-pink-950 mb-1">Top Rated Products for you</p>
                <h1 className="text-3xl font-bold mb-1">Best Products</h1>
                <p className="text-xs text-pink-900">
                    Here you will find the best items 
                    that you will not find anywhere else.
                </p>
            </div>
            {/* body section */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 place-items-center">
                        
                    {
                    ProductsData.map((data, i) => (
                        <div
                        key={data.id}
                        ref={el => (itemRefs.current[i] = el)}
                        className={`rounded-3xl bg-white dark:bg-gray-800 duration-300 group max-w-[300px] cursor-pointer transition-shadow focus-within:ring-4 focus-within:ring-[#C05263] hover:shadow-lg
                            ${visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                        `}
                        style={{
                            transition: "opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)",
                            transitionDelay: `${i * 150}ms`
                        }}
                        tabIndex={0}
                        >
                        {/*image section*/}
                        <div className="overflow-hidden rounded-xl flex flex-col items-center">
                            <img
                            src={data.img}
                            alt={data.title}
                            className="rounded-xl 
                             group-focus:scale-105
                             block mx-auto
                             max-w-[140px] group-hover:scale-105 transition-transform
                             duration-300 drop-shadow-md"
                            />
                        </div>
                        {/*details section*/}
                        <div className="p-4 pt-2 text-center">
                            <h2 className="text-lg font-semibold">{data.title}</h2>
                            <p className="text-pink-900">Price: {data.price} DZD</p>
                            <span className='text-yellow-500 mr-1'>★</span>
                            <span className='text-gray-500'>{data.rating}</span>
                        </div>
                        <div className="pb-4 flex justify-center">
                            <button
                                className="text-white font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2"
                                style={{
                                    backgroundColor: "#C05263"
                                }}
                                onMouseOver={e => e.currentTarget.style.backgroundColor = "#EDAF9E"}
                                onMouseOut={e => e.currentTarget.style.backgroundColor = "#C05263"}
                                onFocus={e => e.currentTarget.style.backgroundColor = "#EDAF9E"}
                                onBlur={e => e.currentTarget.style.backgroundColor = "#C05263"}
                                onClick={() => alert(`Order placed for: ${data.title}`)}
                            >
                                Order Now
                            </button>
                        </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};
export default TopProducts;
                    