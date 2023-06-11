import React from 'react';
import { useParams, useLocation } from 'react-router-dom/';
import DrinkDetail from '../components/DrinkDetail';
import MealDetail from '../components/MealDetail';

export default function RecipeDetails() {
  const { idDaReceita } = useParams();
  const { pathname } = useLocation();

  return (
    <div>
      {pathname.includes('/drinks') ? (
        <DrinkDetail id={ idDaReceita } />
      ) : (
        <MealDetail id={ idDaReceita } />
      )}
    </div>
  );
}
