import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom/';
import RecipeCard from './RecipeCard';

export default function Meals({ data }) {
  const { meals } = data;

  if (!meals) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return null;
  }

  if (meals.length === 1) {
    return <Redirect to={ `/meals/${meals[0].idMeal}` } />;
  }
  return (
    <div>
      {meals.length > 0
        && meals.map((meal, index) => {
          const limit = 12;
          if (index < limit) {
            return <RecipeCard key={ meal.idMeal } data={ meal } index={ index } />;
          }
          return null;
        })}
    </div>
  );
}

Meals.propTypes = {
  data: PropTypes.shape({
    meals: PropTypes.shape({
      idMeal: PropTypes.string,
    }),
  }),
}.isRequired;
