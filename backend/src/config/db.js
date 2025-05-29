import mongoose from "mongoose";

import "dotenv/config";

export default async function connectDB() {
    const URL = "mongodb+srv://ayaaliouali:12cWpSXs44urIOUi@cluster0.55ewb0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"||process.env.MONGO_DB_URL;
    try {
        await mongoose.connect(URL
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}
