const express = require("express");
const router = express.Router();
const controller = require("./curdController");

// GET request to fetch all attractions
router.get("/items", controller.getAllItems); 

// GET request to fetch a single attraction by ID
router.get("/items/:id", controller.getItemById); 

module.exports = router;
