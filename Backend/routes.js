const express = require("express");
const router = express.Router();
const controller = require("./curdController");

// GET all items
router.get("/items", controller.getAllItems);

// GET a single item by ID
router.get("/items/:id", controller.getItemById);

// POST a new item
router.post("/items", controller.createItem);

// PUT to update an existing item
router.put("/items/:id", controller.updateItem); // ✅ Add this

// DELETE an item
router.delete("/items/:id", controller.deleteItem); // ✅ Add this

module.exports = router;
