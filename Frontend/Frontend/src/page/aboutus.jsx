import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
      </div>
      <hr className="border-gray-300 mb-6" />

      <h2 className="text-3xl font-semibold text-gray-800">Exploring Hampi: A Memorable Journey of 2024</h2>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Project Overview</h2>
      <p className="text-gray-600 leading-relaxed">
        I went to Hampi in 2024, a place that had a significant impact on me in terms of culture, history, and natural beauty. In this project, I am documenting my experience and sharing the key highlights of the place, creating a digital version for travel enthusiasts. This combines storytelling with visuals and data to present the information effectively.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Interactive Travel Journal: Includes maps, timelines, and vivid descriptions of major landmarks.</li>
        <li>Photo Gallery: A visually enhanced collection of scenic vistas and cultural highlights.</li>
        <li>Cultural Insights: Anecdotes and historical context of the place.</li>
        <li>Travel Tips: Information on budgeting, transportation, and must-see spots.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Tech Stack</h2>
      <ul className="list-disc pl-6 text-gray-600">
        <li><span className="font-bold">Frontend:</span> HTML, CSS, JavaScript</li>
        <li><span className="font-bold">Backend:</span> C++, Java</li>
        <li><span className="font-bold">Database:</span> MongoDB</li>
        <li><span className="font-bold">Hosting:</span> Git and GitHub</li>
        <li><span className="font-bold">Other Tools:</span> Adobe Photoshop for photo editing</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why This Project?</h2>
      <p className="text-gray-600 leading-relaxed">
        I chose this project to blend my passion for travel and technology, applying web development, multimedia, and content creation skills. It helps me improve design, backend handling, and data presentation while inspiring others to explore Hampi and showcasing my content creation abilities.
      </p>
    </div>
  );
};

export default AboutUs;
