import { useState, useEffect } from 'react';

const useAuthToken = (tokenKey = 'authToken') => {
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

  const isAuthenticated = Boolean(token);

  return {
    token,
    isAuthenticated,
    isLoading,
    saveToken,
    removeToken
  };
};

export default useAuthToken;

  