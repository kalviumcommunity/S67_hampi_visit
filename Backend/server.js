const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Attraction } = require("./schema"); 
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors()); 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/api/attractions", async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.json(attractions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/attractions", async (req, res) => {
    try {
        const { name, description, location } = req.body;
        if (!name || !description || !location) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newAttraction = new Attraction({ name, description, location });
        await newAttraction.save();
        res.status(201).json(newAttraction); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an attraction
app.put("/api/attractions/:id", async (req, res) => {
    console.log("🔍 Update Request Received - ID:", req.params.id);
    console.log("📝 Data to Update:", req.body);

    try {
        const updatedAttraction = await Attraction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedAttraction) {
            return res.status(404).json({ error: "Attraction not found" });
        }

        console.log("✅ Successfully updated:", updatedAttraction);
        res.json(updatedAttraction);
    } catch (err) {
        console.error("❌ Update Error:", err);
        res.status(500).json({ error: err.message });
    }
});


// Delete an attraction
app.delete("/api/attractions/:id", async (req, res) => {
    try {
        const deletedAttraction = await Attraction.findByIdAndDelete(req.params.id);

        if (!deletedAttraction) {
            return res.status(404).json({ error: "Attraction not found" });
        }

        res.json({ message: "Attraction deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
