import React from 'react'
import Image4 from '../../assets/hero/flower.jpg'
import LoginModal from '../Navbar/modals/LoginModal';
import SignUpModal from '../Navbar/modals/SignUpModal';


const heroStyle = {
    backgroundColor: '#FFF9F0',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
};

const textStyle = {
    fontFamily: "'Dancing Script', cursive",
    fontSize: '24px',
    color: '#333',
    marginLeft: '20px',
};
const shadowStyle = {
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
};
const imageStyle = {
    width: '300px',
    height: 'auto',
    borderRadius: '50%', // Makes the shadow appear more natural under the flower
    objectFit: 'contain',
    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3))', // Shadow without a box
};

const Hero = () => {
    return (
        <>
            <style>
                {`
                    @keyframes floatFlower {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(20px); }
                        100% { transform: translateY(0); }
                    }
                    .flower-float {
                        animation: floatFlower 3s ease-in-out infinite;
                    }
                `}
            </style>
            <div
                style={{
                    ...heroStyle,
                    height: 'auto',
                    position: 'relative',
                    textAlign: 'center',
                    marginTop: '80px', // Add margin to push below navbar
                }}
            >
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=DM+Serif+Display&display=swap"
                    rel="stylesheet"
                />
                <div style={{ ...textStyle, fontSize: '36px', fontFamily: "'Dancing Script', cursive", margin: '0 auto', color: '#C05263' }}>
                    <h1 className="hero-title" style={{ fontSize: '60px', fontFamily: "'Dancing Script', cursive", color: '#C05263' }}>
                        Discover Your<br />
                        <span className="highlight" style={{ color: '#C05263' }}>Perfect Gift</span>
                    </h1>
                    <p
                        className="hero-subtitle"
                        style={{
                            color: '#85193C',
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: '20px',
                            marginTop: '40px'
                        }}
                    >
                        Every gift needs a flower touch
                    </p>
                    <div>
                        <button
                            className="bg-[#EDAF9E] hover:bg-[#C05263] text-white px-5 py-2 mt-8 text-lg font-serif rounded shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C05263] hover:shadow-xl cursor-pointer"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
                <img
                    src={Image4}
                    alt="Flower Bouquet"
                    className="flower-float"
                    style={{
                        ...imageStyle,
                        width: '400px',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '10px',
                        margin: '20px auto'
                    }}
                />
            </div>
            <LoginModal />
            <SignUpModal />
        </>
    );
}

export default Hero;


 
