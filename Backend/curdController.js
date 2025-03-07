const mongoose = require("mongoose");

// Connect to MongoDB (Modify with your database URI)
mongoose.connect("mongodb://localhost:27017/hampiVisitDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Define Schema for Items (e.g., Hampi Attractions)
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    images: [String], // Array of image URLs
    history: String,
    createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema); // Creating model

// CRUD Controllers

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new item
exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update an existing item
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Item not found" });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
