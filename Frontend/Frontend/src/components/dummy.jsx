import React from "react";

const DisplayCard = ({ name, description, significance, bestTime, location }) => {
  return (
    <div className="border p-6 rounded-xl shadow-lg bg-white max-w-lg">
      <h2 className="text-3xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-gray-500 mt-2 italic">Significance : {significance}</p>
      <p className="text-gray-700 mt-2 font-semibold">Best Time to Visit : {bestTime}</p>
      <p className="text-gray-600 mt-2">Location : {location}</p>
    </div>
  );
};

export default DisplayCard;
