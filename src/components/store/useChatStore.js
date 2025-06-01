import { create } from 'zustand';

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  // Get all users
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, isUsersLoading: false });
    } catch (error) {
      console.error('Error fetching users:', error);
      set({ isUsersLoading: false });
      // For demo purposes, set mock users
      set({ 
        users: [
          { _id: '1', fullName: 'John Doe', profilePic: '/avatar.png' },
          { _id: '2', fullName: 'Jane Smith', profilePic: '/avatar.png' },
          { _id: '3', fullName: 'Mike Johnson', profilePic: '/avatar.png' }
        ]
      });
    }
  },

  // Get messages for selected user
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/messages/${userId}`);
      const messages = await response.json();
      set({ messages, isMessagesLoading: false });
    } catch (error) {
      console.error('Error fetching messages:', error);
      set({ isMessagesLoading: false });
      // For demo purposes, set mock messages
      set({ 
        messages: [
          {
            _id: '1',
            senderId: userId,
            text: 'Hello! How are you?',
            createdAt: new Date().toISOString(),
            image: null
          },
          {
            _id: '2', 
            senderId: 'current-user',
            text: 'Hi! I\'m doing great, thanks for asking!',
            createdAt: new Date().toISOString(),
            image: null
          }
        ]
      });
    }
  },

  // Send a message
  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...messageData,
          receiverId: selectedUser._id
        }),
      });
      
      const newMessage = await response.json();
      
      // Add message to current messages
      set(state => ({
        messages: [...state.messages, newMessage]
      }));
    } catch (error) {
      console.error('Error sending message:', error);
      // For demo purposes, add message locally
      const newMessage = {
        _id: Date.now().toString(),
        senderId: 'current-user',
        text: messageData.text,
        image: messageData.image,
        createdAt: new Date().toISOString()
      };
      
      set(state => ({
        messages: [...state.messages, newMessage]
      }));
    }
  },

  // Set selected user
  setSelectedUser: (user) => {
    set({ selectedUser: user });
  },

  // Subscribe to real-time messages (WebSocket)
  subscribeToMessages: () => {
    // Implement WebSocket connection here
    console.log('Subscribing to messages...');
  },

  // Unsubscribe from real-time messages
  unsubscribeFromMessages: () => {
    // Implement WebSocket cleanup here
    console.log('Unsubscribing from messages...');
  },
}));