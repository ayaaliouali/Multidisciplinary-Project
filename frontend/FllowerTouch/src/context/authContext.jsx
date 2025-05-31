import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children, tokenKey = 'authToken' }) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(tokenKey);
      setToken(storedToken);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  }, [tokenKey]);

  const saveToken = (newToken) => {
    try {
      if (newToken) {
        localStorage.setItem(tokenKey, newToken);
        setToken(newToken);
      } else {
        localStorage.removeItem(tokenKey);
        setToken(null);
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  const removeToken = () => {
    try {
      localStorage.removeItem(tokenKey);
      setToken(null);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  const login = (newToken) => {
    saveToken(newToken);
  };

  const logout = () => {
    removeToken();
  };

  const isAuthenticated = Boolean(token);

  const value = {
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    saveToken,
    removeToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
