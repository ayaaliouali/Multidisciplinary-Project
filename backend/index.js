import dotenv from "dotenv";
dotenv.config();
// console.log("1) Loaded JWT_SECRET:", JSON.stringify(process.env.JWT_SECRET));
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDB from'./src/config/db.js';
import { setSocketIO } from './src/socket.js'; 
import authRouter from './src/routes/auth.js';     
import userRouter from './src/routes/user.js'; 
import messageRouter from './src/routes/message.route.js'; 
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import productRoutes from './src/routes/productRoutes.js';
import adminProductRoutes from './src/routes/admin/adminProductRoutes.js';
import CartRoutes from './src/routes/cartRoutes.js';
import comments from './src/routes/comment.js';


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

setSocketIO(io);

app.set('trust proxy', 1); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.set('trust proxy', 1); 
app.use(express.json());


const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,//10 minutes
  max: 100,
});

app.use(limiter);

app.get("/",(req,res)=>{
  res.send("Express.js is running successfully")
});

app.use('/auth',authRouter);
app.use('/users',userRouter);
app.use('/message',messageRouter);
app.use('/api/products', productRoutes, adminProductRoutes); // Ensure both routes are mounted
app.use('/api/cart', CartRoutes);
app.use('/api/v1/comments', comments);


io.on("connection", (socket) => {
  console.log("🔌 New user connected:", socket.id);

  socket.on("joinRoom", ({ senderId, receiverId }) => {
    const roomId = [senderId, receiverId].sort().join("-");
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});   

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

