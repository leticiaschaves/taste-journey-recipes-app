import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

export default function Meals({ data }) {
  const { filteredByCategory } = useSelector((state) => state.recipes);
  const { meals } = data;

  if (!meals) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return null;
  }

  if (meals.length === 1 && filteredByCategory) {
    return <Redirect to={ `/meals/${meals[0].idMeal}` } />;
  }
  return (
    <div className="meals">
      {meals.length > 0
        && meals.map((meal, index) => {
          const limit = 12;
          if (index < limit) {
            return (
              <Link to={ `/meals/${meal.idMeal}` } key={ meal.idMeal }>
                <RecipeCard data={ meal } index={ index } />
              </Link>
            );
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
