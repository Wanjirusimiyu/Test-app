import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FeaturedRecipes = ({ recipes }) => {
  return (
    <div className="mb-12">
      <Swiper spaceBetween={30} slidesPerView={2}>
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
              <div className="p-4">
                <h2 className="text-lg font-bold">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.shortDescription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedRecipes;
