import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsAndRecommendations } from '../redux/actions';
import RecommendationCard from './RecommendationCard';
import StartRecipeBtn from './StartRecipeBtn';

export default function MealDetail({ id }) {
  const dispatch = useDispatch();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  useEffect(() => {
    dispatch(fetchDetailsAndRecommendations(url));
  }, []);
  const { details, recommendations } = useSelector((state) => state.recipes);
  let ingredientsKeys = [];
  let measuresKeys = [];

  if (details) {
    ingredientsKeys = Object
      .keys(details)
      .filter((key) => key.includes('Ingredient'));
    measuresKeys = Object
      .keys(details)
      .filter((key) => key.includes('Measure'));
  }

  return (
    <div>
      <img
        src={ details.strMealThumb }
        alt={ details.strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{details.strMeal}</h1>
      <h3 data-testid="recipe-category">{details.strCategory}</h3>
      <ul>
        {(ingredientsKeys.length > 0 && measuresKeys.length > 0)
          && ingredientsKeys.map((key, index) => (details[key] !== '' ? (
            <li
              key={ key }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${details[key]} - ${details[measuresKeys[index]]}`}
            </li>
          ) : null))}
      </ul>
      <p data-testid="instructions">{details.strInstructions}</p>
      <iframe
        src={ details.strYoutube }
        width="560"
        height="315"
        title={ details.strMeal }
        data-testid="video"
      />
      <div className="recommendation">
        {recommendations.map((item, index) => (
          <RecommendationCard key={ index } data={ item } index={ index } />
        ))}
      </div>
      <StartRecipeBtn />
    </div>
  );
}

MealDetail.propTypes = {
  id: PropTypes.string.isRequired,
};
