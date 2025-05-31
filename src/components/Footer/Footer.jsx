import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaHeart, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#C05263]  text-white py-12 px-4">
      
      <div className="max-w-6xl mx-auto">
        {/* Brand Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-2">🌸</span>
            <h2 className="text-3xl font-bold">FlowerTouch</h2>
          </div>
          <p className="text-white/80 max-w-md mx-auto">
            Bringing beauty to your world with our carefully curated collection of flowers and gifts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>FlowerTouch Online Shop</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:amanizemra0@gmail.com" className="hover:underline">
                  amanizemra0@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+213-0656469659" className="hover:underline">
                  +213 65 64 69 659
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-sm text-white/80 hover:text-white hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/share/16QH9Thksy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/@az_flower__touch?_t=ZM-8w61P0unZNl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.25V9.5a5 5 0 1 0 5 5V7.25a5.75 5.75 0 0 0 4.5 1.5V5.75a3.25 3.25 0 0 1-3.25-3.25h-4.25z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/az_flower__touch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <span>© {new Date().getFullYear()} FlowerTouch. All rights reserved.</span>
              <span>Made with</span>
              <FaHeart className="text-red-400" />
              <span>for flower lovers.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Shipping Info</a>
              <a href="#" className="hover:underline">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer