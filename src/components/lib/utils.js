// Format message timestamp
export const formatMessageTime = (date) => {
  const messageDate = new Date(date);
  const now = new Date();
  const diffInMs = now - messageDate;
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;

  if (diffInHours < 1) {
    // Less than 1 hour - show minutes
    const minutes = Math.floor(diffInMs / (1000 * 60));
    return minutes < 1 ? 'Just now' : `${minutes}m ago`;
  } else if (diffInHours < 24) {
    // Less than 24 hours - show hours
    const hours = Math.floor(diffInHours);
    return `${hours}h ago`;
  } else if (diffInDays < 7) {
    // Less than 7 days - show day of week
    return messageDate.toLocaleDateString('en-US', { weekday: 'short' });
  } else {
    // More than 7 days - show date
    return messageDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
};

// Format user status
export const formatUserStatus = (isOnline, lastSeen) => {
  if (isOnline) return 'Online';
  
  if (lastSeen) {
    const lastSeenDate = new Date(lastSeen);
    const now = new Date();
    const diffInMs = now - lastSeenDate;
    const diffInMinutes = diffInMs / (1000 * 60);
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${Math.floor(diffInMinutes)} min ago`;
    if (diffInHours < 24) return `${Math.floor(diffInHours)} hours ago`;
    if (diffInDays < 7) return `${Math.floor(diffInDays)} days ago`;
    
    return lastSeenDate.toLocaleDateString();
  }
  
  return 'Offline';
};

// Validate image file
export const validateImageFile = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please select a JPEG, PNG, GIF, or WebP image.');
  }
  
  if (file.size > maxSize) {
    throw new Error('File size too large. Please select an image smaller than 5MB.');
  }
  
  return true;
};

// Truncate text
export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate random color for avatars
export const generateAvatarColor = (userId) => {
  const colors = [
    'bg-red-500',
    'bg-blue-500', 
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500'
  ];
  
  const index = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};