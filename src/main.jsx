import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopProducts from './components/ShopProducts/ShopProducts.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'Products',
    element: <ShopProducts />,
  }
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
