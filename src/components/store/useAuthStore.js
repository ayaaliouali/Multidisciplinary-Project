import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  authUser: {
    _id: 'current-user',
    fullName: 'Current User',
    email: 'user@example.com',
    profilePic: '/avatar.png'
  },
  onlineUsers: ['1', '2'], // Mock online users
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: false,

  // Check authentication status
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/check');
      const user = await response.json();
      set({ authUser: user, isCheckingAuth: false });
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ authUser: null, isCheckingAuth: false });
    }
  },

  // Sign up
  signup: async (userData) => {
    set({ isSigningUp: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const user = await response.json();
      set({ authUser: user, isSigningUp: false });
    } catch (error) {
      console.error('Signup failed:', error);
      set({ isSigningUp: false });
    }
  },

  // Login
  login: async (userData) => {
    set({ isLoggingIn: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const user = await response.json();
      set({ authUser: user, isLoggingIn: false });
    } catch (error) {
      console.error('Login failed:', error);
      set({ isLoggingIn: false });
    }
  },

  // Logout
  logout: async () => {
    try {
      // Replace with your actual API endpoint
      await fetch('/api/auth/logout', { method: 'POST' });
      set({ authUser: null });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },

  // Update profile
  updateProfile: async (profileData) => {
    set({ isUpdatingProfile: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      const updatedUser = await response.json();
      set({ authUser: updatedUser, isUpdatingProfile: false });
    } catch (error) {
      console.error('Profile update failed:', error);
      set({ isUpdatingProfile: false });
    }
  },

  // Connect to socket for online users
  connectSocket: () => {
    // Implement socket connection here
    console.log('Connecting to socket...');
  },

  // Disconnect socket
  disconnectSocket: () => {
    // Implement socket disconnection here
    console.log('Disconnecting from socket...');
  },
}));