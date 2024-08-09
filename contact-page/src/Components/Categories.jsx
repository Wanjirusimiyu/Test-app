import React, { useState } from 'react';

const Categories = ({ recipes, onFilter }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Quick Bite']; 

  const handleFilter = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`mx-2 px-4 py-2 rounded-full ${activeCategory === category ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
