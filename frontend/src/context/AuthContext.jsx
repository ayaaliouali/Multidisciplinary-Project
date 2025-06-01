import React, { createContext, useState, useEffect } from 'react';

// Global fetch function
const globalFetch = async (url, options = {}, includeToken = false) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (includeToken) {
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      throw new Error('No authentication token found');
    }
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response:', text);
      throw new Error(`Expected JSON, received: ${text.slice(0, 50)}...`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error.message, { options });
    throw error;
  }
};

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Check for stored token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      globalFetch('http://localhost:4000/users/me', {}, true)
        .then((data) => {
          setUser(data);
          setToken(storedToken);
        })
        .catch((error) => {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
          setToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const data = await globalFetch('http://localhost:4000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      const { token, name, email: userEmail, _id } = data.data; // Ensure _id is included
      setUser({ _id, name, email: userEmail });
      setToken(token);
      localStorage.setItem('token', token);
      return { success: true, message: data.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Login failed',
      };
    }
  };

  // Register function
  const register = async (name, email, password) => {
    try {
      const data = await globalFetch('http://localhost:4000/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });
      const { token, _id, ...userData } = data.data; // Ensure _id is included
      setUser({ _id, ...userData });
      setToken(token);
      localStorage.setItem('token', token);
      return { success: true, message: data.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Registration failed',
      };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading, globalFetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};