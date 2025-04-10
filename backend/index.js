import express from 'express';
import bodyParser from'body-parser';
import connectDB from'./src/config/db.js';
import authRouter from './src/routes/auth.js';     
import userRouter from './src/routes/user.js'; 
import path from"path";
import jwt from "jsonwebtoken";
import multer from"multer";
import cors from"cors";
import User from './src/models/user.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get("/",(req,res)=>{
  res.send("Express.js is running successfully")
});

app.use('/auth',authRouter);
app.use("/users",userRouter);

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

