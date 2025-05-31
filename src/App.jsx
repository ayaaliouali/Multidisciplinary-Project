import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Layout from './pages/Layout'
import AboutUs from './pages/AboutUs'

import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'

// NoPage component
const NoPage = () => {
  return (
    <div style={{ paddingTop: '80px', padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<AboutUs />} />
          
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App