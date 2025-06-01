// index.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import connectDB from './src/config/db.js';
import { setSocketIO } from './src/socket.js';
import authRouter from './src/routes/auth.js';
import userRouter from './src/routes/user.js';
import messageRouter from './src/routes/message.route.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import productRoutes from './src/routes/productRoutes.js';
import adminProductRoutes from './src/routes/admin/adminProductRoutes.js';
import CartRoutes from './src/routes/cartRoutes.js';
import comments from './src/routes/comment.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:5174', // Allow all origins for development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false, // Disable credentials to allow origin: '*'
};

// Socket.IO CORS
const io = new Server(server, {
  cors: corsOptions,
});

setSocketIO(io);

// Middleware
app.set('trust proxy', 1);
app.use(cors(corsOptions)); // Apply CORS globally
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(express.json({ limit: '50mb' })); // Handle large base64 images
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files with explicit CORS headers
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});
app.use(limiter);

// Handle OPTIONS preflight globally
app.options('*', cors(corsOptions));

// Debug POST requests
app.use('/api/admin/products', (req, res, next) => {
  if (req.method === 'POST') {
    console.log('POST to /api/admin/products:', {
      headers: req.headers,
    });
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Express.js is running successfully');
});
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/message', messageRouter);
app.use('/api/products', productRoutes);
app.use('/api/admin/products', adminProductRoutes);
app.use('/api/cart', CartRoutes);
app.use('/api/v1/comments', comments);

// Error handling
app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ message: 'Payload too large. Please upload a smaller image (max 5MB).' });
  }
  console.error('Error:', err.message, err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('🔌 New user connected:', socket.id);
  socket.on('joinRoom', ({ senderId, receiverId }) => {
    const roomId = [senderId, receiverId].sort().join('-');
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Connect to MongoDB
connectDB();

// Start server
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});