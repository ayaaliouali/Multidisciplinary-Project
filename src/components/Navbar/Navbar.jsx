import Logo from '../../assets/logo.png';
import React, { useState } from 'react';
import LoginModal from './modals/LoginModal';
import SignUpModal from './modals/SignUpModal';
import { Link } from "react-router";
<li><link to ="/Products">Products</link></li>

export const Navbar = () => {
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // Style objects
  const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif"
  },
  brandLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  },
  logoImg: {
    width: '40px',
    height: 'auto'
  },
  brandName: {
    fontFamily: "'Dancing Script', cursive",
    color: '#000',
    fontSize: '1.5rem',
    fontWeight: '700'
  },
  navLink: {
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  iconButton: {
    color: '#000',
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'color 0.3s, background-color 0.3s'
  },
  authButton: {
    backgroundColor: '#EDAE9E',
    color: '#000',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  };

  return (
  <>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <div style={styles.container}>
    {/*  Navbar */}
    <div style={{ backgroundColor: '#C05263', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      }}>
      {/* Logo and Brand */}
      <div>
        <a href="#!" style={styles.brandLogo}>
        <img src={Logo} alt="Logo" style={styles.logoImg} />
        <span style={styles.brandName}>Flower Touch</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        {['Home', 'Shop', 'About Us', 'Contact Us'].map((link, index) => (
        <a
          key={index}
          href={`${link.toLowerCase().replace(/\s+/g, '-')}`}
          style={styles.navLink}
          onMouseEnter={(e) => e.target.style.color = '#EDAF9E'}
          onMouseLeave={(e) => e.target.style.color = '#000'}
        >
          {link}
        </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button
        style={styles.authButton}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#d19181'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#EDAE9E'}
        onClick={() => setShowSignUpModal(true)}
        >
        Sign Up
        </button>
        <button
        style={styles.authButton}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#d19181'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#EDAE9E'}
        onClick={() => setShowLoginModal(true)}
        >
        Log in
        </button>
      </div>

      {/* Additional Buttons */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ width: '2rem' }}></div>
        <button
        style={styles.iconButton}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('i').style.color = '#5a1721';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('i').style.color = '#000';
        }}
        >
        <i className="fas fa-shopping-cart" style={{ color: '#000', transition: 'color 0.3s' }}></i>
        </button>
        <button
        style={styles.iconButton}
        onMouseEnter={(e) => {
          e.currentTarget.querySelector('i').style.color = '#5a1721';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector('i').style.color = '#000';
        }}
        >
        <i className="fas fa-user" style={{ color: '#000', transition: 'color 0.3s' }}></i>
        </button>
        <button
        style={styles.iconButton}
        onMouseEnter={(e) => e.target.style.color = '#5a1721'}
        onMouseLeave={(e) => e.target.style.color = '#000'}
        >
        <i className="fas fa-search"></i>
        </button>
      </div>
      </div>
    </div>
    {/* Add the LoginModal and SignUpModal components */}
    <LoginModal
      open={showLoginModal}
      onClose={() => setShowLoginModal(false)}
    />
    <SignUpModal
      open={showSignUpModal}
      onClose={() => setShowSignUpModal(false)}
    />
    </div>
  </>
  );
};

export default Navbar;