// import React from 'react';
// import ContactUs from './ContactUs';
// import Recipe from './Recipe';

// function App() {
//   return (
//     <div>
//       {/* <Recipe /> */}
//       <ContactUs />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import FeaturedRecipes from './Components/FeaturedRecipes';
import AllRecipes from './Components/AllRecipes';
import Categories from './Components/Categories';

function App() {
  const [recipes, setRecipes] = useState({ featuredRecipes: [], allRecipes: [] });
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/recipes.json');
      const data = await response.json();
      setRecipes(data);
      setFilteredRecipes(data.allRecipes); // Initially show all recipes
    };

    fetchRecipes();
  }, []);

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredRecipes(recipes.allRecipes);
    } else {
      const filtered = recipes.allRecipes.filter(recipe => recipe.category === category);
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="bg-backgroundGreen mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Featured Recipes</h1>
        <FeaturedRecipes recipes={recipes.featuredRecipes} />
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-6">Launch Your Palate</h1>
        <Categories recipes={recipes.allRecipes} onFilter={handleFilter} />
        <AllRecipes recipes={filteredRecipes} />
      </section>
    </div>
  );
}

export default App;

