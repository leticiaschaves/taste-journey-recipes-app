import React, { useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/cards/DoneRecipeCard';

export default function DoneRecipes() {
  const doneRecipesLS = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [doneRecipes, setDoneRecipes] = useState(doneRecipesLS);

  const handleFilter = (filter) => {
    setDoneRecipes(doneRecipesLS);
    if (filter !== 'all') {
      setDoneRecipes(doneRecipesLS.filter((recipe) => recipe.type === filter));
    }
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => handleFilter('all') }
      >
        All
      </button>
      <button
        data-testid="filter-by-meal-btn"
        type="button"
        onClick={ () => handleFilter('meal') }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => handleFilter('drink') }
      >
        Drinks
      </button>
      {doneRecipes.map((recipe, index) => (
        <DoneRecipeCard key={ recipe.id } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}
