import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeCard({ data, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{data.strMeal || data.strDrink}</p>
      <img
        width="200px"
        data-testid={ `${index}-card-img` }
        src={ data.strMealThumb || data.strDrinkThumb }
        alt={ data.strMeal || data.strDrink }
      />
    </div>
  );
}

RecipeCard.propTypes = {
  data: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
}.isRequired;
