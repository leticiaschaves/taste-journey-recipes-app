import React from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/cards/DoneRecipeCard';

export default function DoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  return (
    <div>
      <Header title="Done Recipes" />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-meal-btn" type="button">Meals</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      {doneRecipes.map((recipe, index) => (
        <DoneRecipeCard key={ recipe.id } recipe={ recipe } index={ index } />
      ))}
    </div>
  );
}
