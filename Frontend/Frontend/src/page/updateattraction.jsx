import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/attractions";

const UpdateAttraction = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [attraction, setAttraction] = useState({
        name: "",
        description: "",
        location: "",
        images: [""],
        history: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching attraction with ID:", id);
        fetch(`${API_URL}/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setAttraction(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("❌ Error fetching attraction:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "images") {
            setAttraction({ ...attraction, images: [e.target.value] });
        } else {
            setAttraction({ ...attraction, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("🔄 Updating Attraction:", attraction);

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(attraction),
            });

            if (!response.ok) throw new Error(`Failed to update attraction. Status: ${response.status}`);

            navigate("/manage");
        } catch (err) {
            console.error("❌ Error updating attraction:", err);
            setError(err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div>
            <h2>Update Attraction</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={attraction.name} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={attraction.description} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={attraction.location} onChange={handleChange} required />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="images" value={attraction.images.length > 0 ? attraction.images[0] : ""} onChange={handleChange} required />
                </label>
                <label>
                    History:
                    <textarea name="history" value={attraction.history} onChange={handleChange} required />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateAttraction;
