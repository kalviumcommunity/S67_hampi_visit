import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/attractions";

const AttractionsList = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("📡 Fetching data from API...");
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("📥 Received data:", data);
                setAttractions(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("❌ Error fetching attractions:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-lg text-blue-500 mt-6">Loading...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold mt-6">Error: {error}</p>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Hampi Attractions</h2>

            {attractions.length === 0 ? (
                <p className="text-center text-gray-600">No attractions found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {attractions.map((attraction) => (
                        <div 
                            key={attraction._id} 
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img 
                                src={attraction.images[0]} 
                                alt={attraction.name} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{attraction.name}</h3>
                                <p className="text-gray-600 mt-2">{attraction.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AttractionsList;
