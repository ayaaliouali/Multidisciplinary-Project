import express from 'express';
import bodyParser from'body-parser';
import connectDB from'./src/config/db.js';
import path from"path";
import jwt from "jsonwebtoken";
import multer from"multer";
import cors from"cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get("/",(req,res)=>{
  res.send("Express.js is running successfully")
});

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

