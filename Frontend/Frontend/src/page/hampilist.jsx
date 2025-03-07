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

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Hampi Attractions</h2>
            {attractions.length === 0 ? (
                <p>No attractions found.</p>
            ) : (
                attractions.map((attraction) => (
                    <div key={attraction._id}>
                        <h3>{attraction.name}</h3>
                        <p>{attraction.description}</p>
                        <img src={attraction.images[0]} alt={attraction.name} width="200" />
                    </div>
                ))
            )}
        </div>
    );
};

export default AttractionsList;
