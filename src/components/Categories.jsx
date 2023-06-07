import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom/';
import { useDispatch } from 'react-redux';
import { fetchRecipes, redirectToDetails } from '../redux/actions';

export default function Categories({ categories }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleClick = (categoryType) => {
    const urlDrinks = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryType}`;
    const urlMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryType}`;

    dispatch(redirectToDetails(false));
    dispatch(fetchRecipes(pathname === '/drinks' ? urlDrinks : urlMeals));
  };

  const handleClear = () => {
    const urlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const urlMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    dispatch(redirectToDetails(true));
    dispatch(fetchRecipes(pathname === '/drinks' ? urlDrinks : urlMeals));
  };

  return (
    <div>
      { categories && categories.map(({ strCategory }) => (
        <div key={ strCategory }>
          <button
            type="button"
            data-testid={ `${strCategory}-category-filter` }
            onClick={ () => handleClick(strCategory) }
          >
            {strCategory}
          </button>
        </div>))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ handleClear }
      >
        All
      </button>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
