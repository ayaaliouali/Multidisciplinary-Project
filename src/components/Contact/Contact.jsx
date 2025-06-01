import React, { useEffect } from 'react';
// Import the chat store - adjust path based on your folder structure
import { useChatStore } from '../store/useChatStore';

// Import chat components - adjust paths based on your folder structure
import Sidebar from '../components/chat/Sidebar';
import ChatContainer from '../components/chat/ChatContainer';
import NoChatSelected from '../components/chat/NoChatSelected';

const Contact = () => {
  const { selectedUser, getUsers } = useChatStore();

  // Initialize users when component mounts
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact & Chat</h1>
        
        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedUser ? <ChatContainer /> : <NoChatSelected />}
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <p><strong>Email:</strong> contact@example.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Chat Support</h2>
            <p className="text-gray-600">
              Select a contact from the sidebar above to start a conversation. 
              Our support team is available to help you with any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;