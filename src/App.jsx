import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;

