const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is undefined. Check your .env file.");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
