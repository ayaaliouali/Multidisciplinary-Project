import React, { useState } from 'react';

const Contact = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const users = [
    { id: 1, name: 'John Doe', status: 'online', avatar: 'JD', color: 'bg-blue-500' },
    { id: 2, name: 'Jane Smith', status: 'online', avatar: 'JS', color: 'bg-green-500' },
    { id: 3, name: 'Mike Johnson', status: 'offline', avatar: 'MJ', color: 'bg-purple-500' }
  ];

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    // Mock messages for the selected user
    setMessages([
      { id: 1, text: `Hello! How can I help you today?`, sender: 'them', time: '10:30 AM' },
      { id: 2, text: 'Hi there! I have a question about your services.', sender: 'me', time: '10:32 AM' }
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact & Chat</h1>
        
        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-80 border-r bg-gray-50 flex flex-col">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Contacts</h3>
                <p className="text-sm text-gray-500 mt-1">({users.filter(u => u.status === 'online').length} online)</p>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-2">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      onClick={() => handleUserSelect(user)}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors ${
                        selectedUser?.id === user.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                      }`}
                    >
                      <div className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white font-semibold relative`}>
                        {user.avatar}
                        {user.status === 'online' && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{user.name}</div>
                        <div className={`text-sm capitalize ${user.status === 'online' ? 'text-green-600' : 'text-gray-500'}`}>
                          {user.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedUser ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${selectedUser.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                        {selectedUser.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedUser.name}</h3>
                        <p className={`text-sm capitalize ${selectedUser.status === 'online' ? 'text-green-600' : 'text-gray-500'}`}>
                          {selectedUser.status}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedUser(null)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'me' 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-white border'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 bg-white border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        disabled={!message.trim()}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                /* No Chat Selected State */
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Welcome to Chat!</h2>
                    <p className="text-gray-600">Select a conversation from the sidebar to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-3">
              <p><strong>Email:</strong> amanizemra0@gmail.com</p>
              <p><strong>Phone:</strong> 0656469659</p>
              
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Chat Support</h2>
            <p className="text-gray-600">
              
              Our support team is available to help you with any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;