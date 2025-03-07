const connectDB = require("./db");
const { Attraction } = require("./schema");

const seedDatabase = async () => {
    try {
        console.log("🌍 Connecting to MongoDB...");
        await connectDB();
        console.log("✅ MongoDB Connected!");

        console.log("🗑 Clearing existing data...");
        await Attraction.deleteMany({});
        console.log("✅ Data Cleared!");

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

        console.log("📤 Inserting new data...");
        const insertedData = await Attraction.insertMany(attractions);
        console.log("✅ Inserted Data:", insertedData);

        console.log("🎉 Database Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
