import React from 'react'
import { FaFacebook, FaInstagram,  } from 'react-icons/fa'

const Footer = () => {
  
  return (
    <footer className="bg-[#C05263] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="mr-2">📍</span> FlowerTouch online Shop
            </p>
            <p className="flex items-center">
              <span className="mr-2">⏰</span> anytime and anywhere you want
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Support</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="mr-2">📧</span> amanizemra0@gmail.com
            </p>
            <p className="flex items-center">
              <span className="mr-2">📞</span> +213-0656469659
            </p>
          </div>
        </div>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap');
            footer, footer * {
              font-family: 'Crimson Text', serif !important;
            }
          `}
        </style>
        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Account</h3>
            <ul className="space-y-2">
              <li className="hover:text-white/80 cursor-pointer">Home</li>
              <li className="hover:text-white/80 cursor-pointer">Login / SignUp</li>
             
              <li className="hover:text-white/80 cursor-pointer">About us</li>
              <li className="hover:text-white/80 cursor-pointer">Shop</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact us</h3>
            <ul className="space-y-2">
              <li className="hover:text-white/80 cursor-pointer">Chat</li>
              <li className="hover:text-white/80 cursor-pointer">Social media</li>
            </ul>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/share/16QH9Thksy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl hover:text-white/80 cursor-pointer" />
              </a>
              <a
                href="https://www.tiktok.com/@az_flower__touch?_t=ZM-8w61P0unZNl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* TikTok SVG Icon */}
                <svg
                  className="text-xl hover:text-white/80 cursor-pointer"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.25V9.5a5 5 0 1 0 5 5V7.25a5.75 5.75 0 0 0 4.5 1.5V5.75a3.25 3.25 0 0 1-3.25-3.25h-4.25z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/az_flower__touch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl hover:text-white/80 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/30">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} FlowerTouch. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

