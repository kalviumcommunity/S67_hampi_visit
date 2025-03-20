const connectDB = require("./db");
const { Attraction } = require("./schema");

const seedDatabase = async () => {
    console.log(`[${new Date().toISOString()}] 🌍 Connecting to MongoDB...`);
    
    try {
        await connectDB();
        console.log(`[${new Date().toISOString()}] ✅ MongoDB Connected!`);

        console.log(`[${new Date().toISOString()}] 🗑 Clearing existing data...`);
        await Attraction.deleteMany({});
        console.log(`[${new Date().toISOString()}] ✅ Data Cleared!`);

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

        console.log(`[${new Date().toISOString()}] 📤 Inserting new data...`);
        const insertedData = await Attraction.insertMany(attractions);
        console.log(`[${new Date().toISOString()}] ✅ Inserted Data:`, insertedData);

        console.log(`[${new Date().toISOString()}] 🎉 Database Seeded Successfully!`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] ❌ Error seeding database:`, error);
    } finally {
        console.log(`[${new Date().toISOString()}] 🔄 Closing database connection...`);
        process.exit();
    }
};

seedDatabase();
