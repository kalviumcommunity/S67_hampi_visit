const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const { Attraction } = require("./schema");
const itemRoutes = require("./routes"); // Import additional routes

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// GET Route to Fetch Attractions
app.get("/", async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.json(attractions);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// Use Routes
app.use("/api", itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
