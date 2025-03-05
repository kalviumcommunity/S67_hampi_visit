const connectDB = require("./db");
const { Attraction } = require("./schema");

const seedDatabase = async () => {
    await connectDB();

    // Clear existing data
    await Attraction.deleteMany({});

    // Insert new attractions
    const attractions = [
        {
            name: "Virupaksha Temple",
            description: "A historic temple dedicated to Lord Shiva, located in Hampi.",
            images: ["https://example.com/virupaksha.jpg"],
            location: "Hampi, Karnataka",
        },
        {
            name: "Vittala Temple",
            description: "Famous for its stone chariot and musical pillars.",
            images: ["https://example.com/vittala.jpg"],
            location: "Hampi, Karnataka",
        },
        {
            name: "Lotus Mahal",
            description: "An elegant Indo-Islamic architectural palace in Hampi.",
            images: ["https://example.com/lotusmahal.jpg"],
            location: "Hampi, Karnataka",
        }
    ];

    const insertedData = await Attraction.insertMany(attractions);
    console.log("Inserted Data:", insertedData); // 🛑 Log inserted data

    console.log("Database Seeded with Hampi Attractions!");
    process.exit();
};

seedDatabase();
