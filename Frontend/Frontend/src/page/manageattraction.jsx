import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/attractions"; 

const ManageAttractions = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAttractions();
    }, []);

    const fetchAttractions = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setAttractions(data);
            setLoading(false);
        } catch (err) {
            console.error("❌ Error fetching attractions:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    const deleteAttraction = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete attraction");

            fetchAttractions();
        } catch (error) {
            console.error("❌ Error deleting attraction:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Manage Attractions</h2>
            {attractions.length === 0 ? (
                <p>No attractions found.</p>
            ) : (
                attractions.map((attraction) => (
                    <div key={attraction._id} className="border p-4 my-2">
                        <h3>{attraction.name}</h3>
                        <p>{attraction.description}</p>
                        <img src={attraction.images[0]} alt={attraction.name} width="200" />
                        <div>
                            <button onClick={() => navigate(`/update/${attraction._id}`)} className="bg-blue-500 text-white px-3 py-1 rounded mx-2">
                                Update
                            </button>
                            <button onClick={() => deleteAttraction(attraction._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ManageAttractions;
