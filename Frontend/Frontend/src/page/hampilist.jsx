import React, { useEffect, useState } from "react";
import axios from "axios";

const HampiAttractions = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Hampi Attractions</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img src={item.images[0]} alt={item.name} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HampiAttractions;
