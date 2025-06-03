import Logo from '../../assets/logo.png';
import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';
import SignUpModal from './modals/SignUpModal';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, logout } = useAuth();

  const cartItemsCount = getCartItemsCount();

  // Navigation items with their routes
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    // { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <nav className="bg-[#C05263] shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
                <span className="text-black font-bold text-xl font-['Dancing_Script']">
                  Flower Touch
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-black hover:text-[#EDAF9E] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-black">{user.name}</span>
                  <button
                    onClick={logout}
                    className="bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowSignUpModal(true)}
                    className="bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Log in
                  </button>
                </>
              )}
              <Link to="/cart" className="relative">
                <button className="text-black hover:text-[#5a1721] p-2 rounded-md transition-colors duration-300">
                  <i className="fas fa-shopping-cart text-lg"></i>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {cartItemsCount > 99 ? '99+' : cartItemsCount}
                    </span>
                  )}
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-[#EDAF9E] p-2 rounded-md transition-colors duration-300"
              >
                <i
                  className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}
                ></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#C05263] border-t border-[#EDAF9E]">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-black hover:text-[#EDAF9E] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  {user ? (
                    <>
                      <span className="block text-black px-3 py-2">
                        {user.name}
                      </span>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setShowSignUpModal(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={() => {
                          setShowLoginModal(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-[#EDAE9E] hover:bg-[#d19181] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                      >
                        Log in
                      </button>
                    </>
                  )}
                </div>
                <div className="flex justify-center space-x-6 pt-4">
                  <Link
                    to="/cart"
                    className="relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <button className="text-black hover:text-[#5a1721] p-2 rounded-md transition-colors duration-300">
                      <i className="fas fa-shopping-cart text-lg"></i>
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                          {cartItemsCount > 99 ? '99+' : cartItemsCount}
                        </span>
                      )}
                    </button>
                  </Link>
                  <button className="text-black hover:text-[#5a1721] p-2 rounded-md transition-colors duration-300">
                    <i className="fas fa-user text-lg"></i>
                  </button>
                  <button className="text-black hover:text-[#5a1721] p-2 rounded-md transition-colors duration-300">
                    <i className="fas fa-search text-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignUpModal
        open={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      />
    </>
  );
};

export default Navbar;