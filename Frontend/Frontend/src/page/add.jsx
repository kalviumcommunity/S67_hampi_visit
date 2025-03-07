import { useState, useEffect } from "react";

export default function EntityForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        fetchEntities();
    }, []);

    const fetchEntities = async () => {
        const response = await fetch("http://localhost:5000/api/attractions");
        const data = await response.json();
        setEntities(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEntity = { name, description, location };
        
        const response = await fetch("http://localhost:5000/api/attractions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEntity)
        });

        if (response.ok) {
            fetchEntities(); // Refresh the list after adding
            setName("");
            setDescription("");
            setLocation("");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Add New Attraction</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 w-full" required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Attraction</button>
            </form>
            <h2 className="text-lg font-semibold mt-4">Attractions List</h2>
            <ul className="mt-2">
                {entities.map((entity) => (
                    <li key={entity._id} className="border p-2 mt-2">{entity.name} - {entity.location}</li>
                ))}
            </ul>
        </div>
    );
}
