import React from 'react';

const AboutContent = () => {
  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: '#F5F0ED' }}>
      {/* Hero Section */}
      <div className="relative">
        
       
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side - Image */}
            <div className="</div>lg:w-1/2">
              <div className="relative">
                <img 
                  src="src\assets\item\flower.jpg"  
                  alt="Beautiful pink rose" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 space-y-8">
              
              {/* Title */}
              <div className="text-center lg:text-left">
                <h1 
                  className="text-5xl lg:text-6xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'Crimson Text, serif',
                    color: '#2D1B17'
                  }}
                >
                  About Us
                </h1>
              </div>

              {/* Main Content Box */}
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2"
                style={{ borderColor: '#C05263' }}
              >
                <div className="space-y-6">
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      color: '#2D1B17'
                    }}
                  >
                    At <span className="font-bold" style={{ color: '#C05263' }}>Flower Touch</span>, we believe that gifting is more than just a gesture - it's a language of love, appreciation, and beauty.
                  </p>

                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      color: '#2D1B17'
                    }}
                  >
                    Born from a passion for delicate details and meaningful moments, our brand was created to make giving feel soft, intentional, and unforgettable.
                  </p>

                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      color: '#2D1B17'
                    }}
                  >
                    We carefully curate elegant gift boxes, floral-inspired pieces, and custom packaging — each crafted with care and wrapped with love. Because every item tells a story, every petal speaks a feeling, and every touch leaves a memory.
                  </p>

                  <p 
                    className="text-lg leading-relaxed"
                    style={{ 
                      fontFamily: 'Crimson Text, serif',
                      color: '#2D1B17'
                    }}
                  >
                    Whether you're celebrating someone special or simply spreading joy, <span className="font-bold" style={{ color: '#C05263' }}>Flower Touche</span> is here to help you say it with heart — 
                    <br />
                    <span className="italic">One gift at a time.</span>
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-2xl">💕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl font-bold mb-8"
              style={{ 
                fontFamily: 'Crimson Text, serif',
                color: '#C05263'
              }}
            >
              Our Mission
            </h2>
            <p 
              className="text-xl leading-relaxed text-gray-700"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              To transform ordinary moments into extraordinary memories through thoughtfully crafted gifts that speak the language of the heart. We believe in the power of touch, the beauty of intention, and the magic that happens when love is wrapped in petals.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Crimson Text, serif',
              color: '#C05263'
            }}
          >
            What We Stand For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-pink-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  color: '#2D1B17'
                }}
              >
                Artistry
              </h3>
              <p 
                className="text-gray-700"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Every piece is thoughtfully designed and carefully crafted to create something truly special.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-rose-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💖</span>
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  color: '#2D1B17'
                }}
              >
                Love
              </h3>
              <p 
                className="text-gray-700"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                We pour our hearts into every creation, ensuring each gift carries genuine emotion and care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-pink-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  fontFamily: 'Crimson Text, serif',
                  color: '#2D1B17'
                }}
              >
                Magic
              </h3>
              <p 
                className="text-gray-700"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                We believe in creating moments that feel magical and memories that last forever.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default AboutContent;