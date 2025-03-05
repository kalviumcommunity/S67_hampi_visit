const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("MongoDB already connected!");
            return;
        }

        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined in .env file");
        }

        await mongoose.connect(uri, { dbName: "hampi_visit" }); // No need for deprecated options
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
