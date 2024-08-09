import React from 'react';
import RecipeCard from './RecipeCard';

const AllRecipes = ({ recipes }) => {
  return (
    <div className="bg-backgroundGreen grid grid-cols-1 md:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default AllRecipes;
