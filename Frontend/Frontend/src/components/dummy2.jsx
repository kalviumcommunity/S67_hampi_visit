import React from "react";
import DisplayCard from "./dummy";

const Cards = () => {
  const hampiSites = [
    {
      name: "Virupaksha Temple",
      description: "An ancient temple dedicated to Lord Shiva, known for its grand architecture and religious significance.",
      significance: "One of the oldest functioning temples in India, part of the UNESCO World Heritage Site.",
      bestTime: "October to February",
      location: "Hampi, Karnataka, India",
    },
    {
      name: "Vittala Temple",
      description: "Famous for the iconic stone chariot and musical pillars, showcasing the Vijayanagara architectural brilliance.",
      significance: "A masterpiece of Indian temple architecture, with intricate carvings and historical importance.",
      bestTime: "October to February",
      location: "Hampi, Karnataka, India",
    },
    {
      name: "Hampi Bazaar",
      description: "A historic marketplace once bustling with traders during the Vijayanagara Empire, now filled with ruins and local shops.",
      significance: "Provides a glimpse into the thriving commercial life of ancient Hampi.",
      bestTime: "November to March",
      location: "Near Virupaksha Temple, Hampi",
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 items-center bg-gray-100 min-h-screen">
      {hampiSites.map((site, index) => (
        <DisplayCard key={index} {...site} />
      ))}
    </div>
  );
};

export default Cards;
