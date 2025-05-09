import React from 'react'
import Image4 from '../../assets/hero/flower.jpg'



const HeroImage = () => {
    return (
        <img 
            src={Image4} 
            alt="Flower" 
            className="w-full h-auto rounded-lg shadow-lg"
        />
    );
};

const heroStyle = {
    backgroundColor: 'FFF9F0',
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
        <div style={{ ...heroStyle, height: 'auto', position: 'relative', textAlign: 'center' }}>
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
                        style={{ 
                            backgroundColor: '#EDAF9E', 
                            color: 'white', 
                            padding: '10px 20px',
                            marginTop: '30px',
                            fontSize: '18px', 
                            fontFamily: "'DM Serif Display', serif", 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer', 
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
                            transition: 'background-color 0.3s ease, box-shadow 0.3s ease' 
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#EDAF9E';
                            e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#C05263';
                            e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                        }}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
            
                <img 
                    src={Image4} 
                    alt="Flower Bouquet" 
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
        
    );
};


export default Hero