import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FavoriteBtn from '../components/FavoriteBtn';
import FinishBtn from '../components/FinishBtn';
import ShareBtn from '../components/ShareBtn';
import { fetchDetailsAndRecommendations } from '../redux/actions';

function RecipeInProgress({ id }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  if (pathname.includes('/drinks')) {
    url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }

  useEffect(() => {
    dispatch(fetchDetailsAndRecommendations(url));
  }, []);
  const { details } = useSelector((state) => state.recipes);
  console.log(details);
  // let ingredientsKeys = [];
  // let measuresKeys = [];

  // if (details) {
  //   ingredientsKeys = Object.keys(details).filter((key) => key.includes('Ingredient'));
  //   measuresKeys = Object.keys(details).filter((key) => key.includes('Measure'));
  // }

  return (
    <div>
      <img
        src={ details.strMealThumb || details.strDrinkThumb }
        alt={ details.strMeal || details.strDrink }
        data-testid="recipe-photo"
        width="200px"
      />
      <h1 data-testid="recipe-title">{details.strMeal || details.strDrink}</h1>
      <h2 data-testid="recipe-category">{details.strCategory}</h2>
      <h3 data-testid="instructions">{details.strInstructions}</h3>
      <FinishBtn />
      <FavoriteBtn data={ details } />
      <ShareBtn />
    </div>
  );
}

RecipeInProgress.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default RecipeInProgress;
