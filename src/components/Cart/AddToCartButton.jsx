import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const AddToCartButton = ({ product, variant = 'primary', size = 'medium', className = '' }) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    setIsAdded(true);
    
    // Reset the button state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Define button styles based on variant and size
  const getButtonStyles = () => {
    const baseStyles = "font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2";
    
    // Size styles
    const sizeStyles = {
      small: "px-3 py-1 text-xs",
      medium: "px-4 py-2 text-sm",
      large: "px-6 py-3 text-base"
    };

    // Variant styles
    const variantStyles = {
      primary: isAdded 
        ? "bg-green-500 text-white" 
        : "bg-pink-500 text-white hover:bg-pink-600",
      secondary: isAdded 
        ? "bg-green-100 text-green-800 border border-green-300" 
        : "bg-pink-100 text-pink-900 border border-pink-300 hover:bg-pink-200",
      outline: isAdded 
        ? "bg-green-50 text-green-700 border-2 border-green-500" 
        : "bg-transparent text-pink-500 border-2 border-pink-500 hover:bg-pink-50"
    };

    return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  };

  return (
    <button
      onClick={handleAddToCart}
      className={getButtonStyles()}
      disabled={isAdded}
      style={{
        backgroundColor: !isAdded && variant === 'primary' ? '#C05263' : undefined,
        color: !isAdded && variant === 'primary' ? '#fff' : undefined
      }}
      onMouseEnter={e => {
        if (!isAdded && variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#EDAF9E';
        }
      }}
      onMouseLeave={e => {
        if (!isAdded && variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#C05263';
        }
      }}
    >
      {isAdded ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5" />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCartButton;