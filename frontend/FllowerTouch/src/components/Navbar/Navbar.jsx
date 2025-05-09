import React from 'react';
import Logo from '../../assets/logo.png'; // Ensure this path is correct and the file exists



export const Navbar = () => {
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
    iconeButton: {
      color: '#000',
      padding: '0.5rem 1rem' ,
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
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
        <div style={{ backgroundColor: '#C05263', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0'
          }}>
            {/* Logo and Brand */}
            <div>
              <a href="#!" style={styles.brandLogo}>
                <img src={Logo} alt="Logo" style={styles.logoImg} />
                <span style={styles.brandName}>Fllower Touch</span>
              </a>
            </div>
            
            {/* Navigation Links */}
            <div style={{ display: 'flex', gap: '2rem' , alignItems: 'center' }}>
              {['Home', 'Shop', 'About Us', 'Contact Us'].map((link, index) => (
                <a 
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  style={styles.navLink}
                  onMouseEnter={(e) => e.target.style.color = '#EDAF9E'}
                  onMouseLeave={(e) => e.target.style.color = '#000'}
                >
                  {link}
                </a>
              ))}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            </div>
            
              
              
              <button 
                style={styles.authButton} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#d19181'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#EDAE9E'}
              >
                Sign Up
              </button>
              
              <button 
                style={styles.authButton} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#d19181'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#EDAE9E'}
              >
                Log in
              </button>
               
                
              
              {/* Additional Buttons */}
              <button 
                style={styles.iconeButton} 
                onMouseEnter={(e) => e.target.style.color = '#5a1721'}
                onMouseLeave={(e) => e.target.style.color = '#000'}
              >
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button 
                style={styles.iconeButton} 
                onMouseEnter={(e) => e.target.style.color = '#5a1721'}
                onMouseLeave={(e) => e.target.style.color = '#000'}
              >
                <i className="fas fa-heart"></i>
              </button>
              <button 
                style={styles.iconeButton} 
                onMouseEnter={(e) => e.target.style.color = '#5a1721'}
                onMouseLeave={(e) => e.target.style.color = '#000'}
              >
                <i className="fas fa-search"></i>
                
                </button>
                
                
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '2px' }}></div>
                 
                </div>
                </div>
            </div>
          </div>
      
      

    </>
  );
}


