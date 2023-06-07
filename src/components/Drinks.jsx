import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Link } from 'react-router-dom/';
import RecipeCard from './RecipeCard';

export default function Drinks({ data }) {
  const { drinks } = data;

  if (!drinks) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return null;
  }

  if (drinks.length === 1) {
    return <Redirect to={ `/drinks/${drinks[0].idDrink}` } />;
  }

  return (
    <div>
      {drinks.length > 0
        && drinks.map((drink, index) => {
          const limit = 12;
          if (index < limit) {
            return (
              <Link to={ `/drinks/${drink.idDrink}` } key={ drink.idDrink }>
                <RecipeCard data={ drink } index={ index } />
              </Link>
            );
          }
          return null;
        })}
    </div>
  );
}

Drinks.propTypes = {
  data: PropTypes.shape({
    drinks: PropTypes.shape({
      idDrink: PropTypes.string,
    }),
  }),
}.isRequired;
