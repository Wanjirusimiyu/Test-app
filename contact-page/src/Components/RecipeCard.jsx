import React from 'react';

const RecipeCard = ({ title, shortDescription, time, difficulty, servings, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{shortDescription}</p>
        <div className="mt-4">
          <span className="text-gray-800">{time}</span> · 
          <span className="text-gray-800">{difficulty}</span> · 
          <span className="text-gray-800">{servings}</span>
        </div>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
