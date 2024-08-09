import React, { useEffect, useState } from 'react';
import { FaClock, FaUtensils, FaConciergeBell } from 'react-icons/fa';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/recipe.json')
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, []);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="bg-backgroundGreen p-6 font-urbanist">
      <div className="container mx-auto p-4">
        <div className="text-center mb-6">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">RECIPE</span>
          <h1 className="text-4xl font-bold my-4">{recipe.title}</h1>
          <p className="text-lg mb-4 flex items-center justify-center">{recipe.description}</p>
          <div className="flex justify-center space-x-4 mb-4">
            <span className="flex items-center space-x-2">
              <FaClock />
              <span>{recipe.time}</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaUtensils />
              <span>{recipe.difficulty}</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaConciergeBell />
              <span>{recipe.servings}</span>
            </span>
          </div>
          <img className="max-w-lg max-h-96 items-center rounded-md" src={recipe.image} alt="Lemon Garlic Roasted Chicken" />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 mb-6">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1 mb-6">
            <h2 className="text-2xl font-bold mb-4">Equipment Needed</h2>
            <ul className="list-disc list-inside">
              {recipe.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1 mb-6">
            <h2 className="text-2xl font-bold mb-4">Nutritional Value</h2>
            <ul className="list-disc list-inside">
              <li>Calories: {recipe.nutrition.calories}</li>
              <li>Protein: {recipe.nutrition.protein}</li>
              <li>Total Fat: {recipe.nutrition.fat}</li>
              <li>Carbohydrates: {recipe.nutrition.carbohydrates}</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
