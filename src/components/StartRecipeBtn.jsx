import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom/';

export default function StartRecipeBtn({ id }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const doneRecipes = localStorage.getItem('doneRecipes') || [];
  const inProgressLS = localStorage.getItem('inProgressRecipes') || {
    drinks: {},
    meals: {},
  };

  let doneVerification = false;
  let inProgressVerification = false;

  if (doneRecipes.length > 0) {
    doneVerification = doneRecipes.some((item) => item.id === id);
  }

  if (pathname.includes('drinks')) {
    inProgressVerification = Object.keys(inProgressLS.drinks).some(
      (item) => item === id,
    );
  } else {
    inProgressVerification = Object.keys(inProgressLS.meals).some(
      (item) => item === id,
    );
  }

  const handleClick = () => {
    history.push(
      pathname.includes('drinks')
        ? `/drinks/${id}/in-progress`
        : `/meals/${id}/in-progress`,
    );
  };

  return (
    <div>
      {!doneVerification && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startRecipe"
          onClick={ handleClick }
        >
          {inProgressVerification ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

StartRecipeBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
