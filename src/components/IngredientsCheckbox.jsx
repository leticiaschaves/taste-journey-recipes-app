import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function IngredientsCheckbox({ details, id }) {
  const { pathname } = useLocation();
  const ingredients = JSON.parse(localStorage.getItem('inProgressRecipes')) || {
    drinks: {
      [id]: [],
    },
    meals: {
      [id]: [],
    },
  };

  let key = 'meals';
  if (pathname.includes('drinks')) {
    // console.log('teste');
    key = 'drinks';
  }

  const INITIAL_STATE = ingredients[key][id] || [];
  console.log(ingredients[key]);

  const [checkedIngredient, setCheckedIngredient] = useState(INITIAL_STATE);
  // useEffect(() => {
  //   setCheckedIngredient(INITIAL_STATE);
  // }, [INITIAL_STATE]);

  let ingredientsKeys = [];
  let measuresKeys = [];

  if (details) {
    ingredientsKeys = Object.keys(details)
      .filter((detailsKey) => detailsKey.includes('Ingredient'));
    measuresKeys = Object.keys(details)
      .filter((detailsKey) => detailsKey.includes('Measure'));
  }

  const handleChecked = ({ target: { value, checked } }) => {
    if (checked) {
      setCheckedIngredient([
        ...checkedIngredient,
        value,
      ]);
    } else {
      setCheckedIngredient(checkedIngredient.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (ingredients) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          ...ingredients,
          [key]: {
            ...ingredients[key],
            [id]: checkedIngredient,
          },
        }),
      );
    }
    console.log(ingredients);
  }, [checkedIngredient]);

  return (
    <div>
      <ul>
        {ingredientsKeys.length > 0
          && measuresKeys.length > 0
          && ingredientsKeys.map((ingredient, index) => (
            (details[ingredient] !== null && details[ingredient] !== '')
            && (details[measuresKeys[index]] !== null
              && details[measuresKeys[index]] !== '')
              && (
                <label
                  key={ ingredient }
                  data-testid={ `${index}-ingredient-step` }
                  className={ checkedIngredient.includes(details[ingredient])
                    ? 'checkedIngredient' : '' }
                >
                  <input
                    type="checkbox"
                    name={ details[ingredient] }
                    id={ details[ingredient] }
                    value={ details[ingredient] }
                    onChange={ handleChecked }
                    checked={ checkedIngredient.includes(details[ingredient]) }
                  />
                  <p>{`${details[measuresKeys[index]]} ${details[ingredient]}`}</p>
                </label>
              )))}
      </ul>
    </div>
  );
}

IngredientsCheckbox.propTypes = {
  details: PropTypes.object,
}.isRequired;

export default IngredientsCheckbox;
