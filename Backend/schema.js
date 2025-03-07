const mongoose = require("mongoose");

const AttractionSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    images: [String],
    history: String,
    createdAt: { type: Date, default: Date.now }
});

const HistorySchema = new mongoose.Schema({
    title: String,
    content: String,
    period: String,
    images: [String],
    createdAt: { type: Date, default: Date.now }
});

const ReviewSchema = new mongoose.Schema({
    visitorName: String,
    email: String,
    attractionId: { type: mongoose.Schema.Types.ObjectId, ref: "Attraction" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

const GuideSchema = new mongoose.Schema({
    name: String,
    contact: String,
    languages: [String],
    experience: Number,
    bio: String,
    image: String
});

const VisitorSchema = new mongoose.Schema({
    name: String,
    email: String,
    favoriteAttractions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attraction" }],
    createdAt: { type: Date, default: Date.now }
});

const GallerySchema = new mongoose.Schema({
    title: String,
    description: String,
    images: [String],
    createdAt: { type: Date, default: Date.now }
});

const EventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    location: String,
    images: [String],
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
