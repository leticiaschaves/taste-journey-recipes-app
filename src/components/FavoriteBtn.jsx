import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function FavoriteBtn({ data }) {
  const favoriteRecipesLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const id = data.idMeal || data.idDrink;

  const INITIAL_STATE = favoriteRecipesLS.some((recipe) => recipe.id === id);

  const [favorite, setFavorite] = useState(INITIAL_STATE);

  useEffect(() => {
    setFavorite(INITIAL_STATE);
  }, [INITIAL_STATE]);

  const handleClick = () => {
    const recipe = {
      id: data.idMeal || data.idDrink,
      type: data.idMeal ? 'meal' : 'drink',
      nationality: data.strArea || '',
      category: data.strCategory,
      alcoholicOrNot: data.strAlcoholic || '',
      name: data.strMeal || data.strDrink,
      image: data.strMealThumb || data.strDrinkThumb,
    };

    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...favoriteRecipesLS, recipe]),
    );
    setFavorite(!favorite);
  };

  return (
    <button type="button" onClick={ handleClick }>
      <img
        src={ favorite ? blackHeart : whiteHeart }
        alt="Heart"
        data-testid="favorite-btn"
      />
    </button>
  );
}

FavoriteBtn.propTypes = {
  data: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
}.isRequired;
