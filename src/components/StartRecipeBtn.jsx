import PropTypes from 'prop-types';
import React from 'react';

export default function StartRecipeBtn({ id }) {
  const doneRecipes = localStorage.getItem('doneRecipes') || [];

  let verification = false;

  if (doneRecipes.length > 0) {
    verification = doneRecipes.some((item) => item.id === id);
  }

  if (verification) {
    return null;
  }
  return (
    <div>
      {!verification && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startRecipe"
        >
          Start Recipe
        </button>
      )}
    </div>
  );
}

StartRecipeBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
