import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutContent from '../components/AboutContent/AboutContent';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <AboutContent />
      </main>
      
    </div>
  );
};

export default AboutUs;