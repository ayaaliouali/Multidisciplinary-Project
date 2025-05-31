import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import AuthProvider from './context/authContext';

export const App = () => {
  return (
    <div>
      <AuthProvider>
         <Navbar />
      <Hero />
      </AuthProvider>
     
      
    </div>
  )
}
export default App;
