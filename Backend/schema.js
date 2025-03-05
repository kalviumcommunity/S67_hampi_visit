const mongoose = require("mongoose");

// Schema for Tourist Attractions
const AttractionSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    images: [String], // Array of image URLs
    history: String,
    createdAt: { type: Date, default: Date.now }
});

// Schema for Historical Information
const HistorySchema = new mongoose.Schema({
    title: String,
    content: String,
    period: String, // e.g., "Vijayanagara Empire"
    images: [String],
    createdAt: { type: Date, default: Date.now }
});

// Schema for Visitor Reviews
const ReviewSchema = new mongoose.Schema({
    visitorName: String,
    email: String,
    attractionId: { type: mongoose.Schema.Types.ObjectId, ref: "Attraction" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

// Schema for Guides
const GuideSchema = new mongoose.Schema({
    name: String,
    contact: String,
    languages: [String], // e.g., ["English", "Kannada", "Hindi"]
    experience: Number, // Years of experience
    bio: String,
    image: String // Guide profile picture URL
});

// Schema for Visitor Information (optional)
const VisitorSchema = new mongoose.Schema({
    name: String,
    email: String,
    favoriteAttractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attraction" }],
    createdAt: { type: Date, default: Date.now }
});

// Schema for Image Gallery
const GallerySchema = new mongoose.Schema({
    title: String,
    description: String,
    images: [String], // URLs of images
    createdAt: { type: Date, default: Date.now }
});

// Schema for Events & Festivals
const EventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    location: String,
    images: [String], // Images related to the event
    createdAt: { type: Date, default: Date.now }
});

const Attraction = mongoose.model("Attraction", AttractionSchema);
const History = mongoose.model("History", HistorySchema);
const Review = mongoose.model("Review", ReviewSchema);
const Guide = mongoose.model("Guide", GuideSchema);
const Visitor = mongoose.model("Visitor", VisitorSchema);
const Gallery = mongoose.model("Gallery", GallerySchema);
const Event = mongoose.model("Event", EventSchema);

module.exports = {
    Attraction,
    History,
    Review,
    Guide,
    Visitor,
    Gallery,
    Event
};
