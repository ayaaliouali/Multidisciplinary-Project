import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

// Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  SET_CART: 'SET_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.SET_CART:
      return { ...state, items: action.payload };

    case CART_ACTIONS.ADD_ITEM:
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      };

    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items
          .map(item =>
            item._id === action.payload.id
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case CART_ACTIONS.CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
};

// Initial State
const initialState = {
  items: [],
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user, token } = useAuth();

  // Fetch cart from backend on user login
  useEffect(() => {
    const fetchCart = async () => {
      if (!user || !token) return;

      try {
        const response = await axios.get(`http://localhost:4000/api/cart/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: CART_ACTIONS.SET_CART, payload: response.data.data.items });
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, [user, token]);

  const addItem = async (product) => {
    if (!user) {
      alert('Please log in to add items to your cart.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/api/cart/${user._id}/add`,
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  const removeItem = async (productId) => {
    if (!user) return;

    try {
      await axios.delete(`http://localhost:4000/api/cart/${user._id}/remove`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId },
      });
      dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
    } catch (error) {
      console.error('Error removing from cart:', error);
      alert('Failed to remove item from cart.');
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (!user) return;

    try {
      await axios.put(
        `http://localhost:4000/api/cart/${user._id}/update`,
        { productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      alert('Failed to update cart quantity.');
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      await axios.delete(`http://localhost:4000/api/cart/${user._id}/clear`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: CART_ACTIONS.CLEAR_CART });
    } catch (error) {
      console.error('Error clearing cart:', error);
      alert('Failed to clear cart.');
    }
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};