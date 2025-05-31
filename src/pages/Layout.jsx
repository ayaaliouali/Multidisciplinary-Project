import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import {Outlet} from "react-router-dom"
import { CartProvider } from "../context/CartContext"

const Layout = () => {

  return (
    <CartProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

export default Layout