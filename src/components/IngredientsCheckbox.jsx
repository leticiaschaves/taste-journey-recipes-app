import PropTypes from 'prop-types';
import React, { useState } from 'react';

function IngredientsCheckbox({ details }) {
  const [checkedIngredient, setCheckedIngredient] = useState([]);
  let ingredientsKeys = [];
  let measuresKeys = [];

  if (details) {
    ingredientsKeys = Object.keys(details).filter((key) => key.includes('Ingredient'));
    measuresKeys = Object.keys(details).filter((key) => key.includes('Measure'));
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

  return (
    <div>
      <ul>
        {ingredientsKeys.length > 0
          && measuresKeys.length > 0
          && ingredientsKeys.map((key, index) => (
            (details[key] !== null && details[key] !== '')
            && (details[measuresKeys[index]] !== null
              && details[measuresKeys[index]] !== '')
              && (
                <label
                  key={ key }
                  data-testid={ `${index}-ingredient-step` }
                  className={ checkedIngredient.includes(details[key])
                    ? 'checkedIngredient' : '' }
                >
                  <input
                    type="checkbox"
                    name={ details[key] }
                    id={ details[key] }
                    value={ details[key] }
                    onChange={ handleChecked }
                  />
                  <p>{`${details[measuresKeys[index]]} ${details[key]}`}</p>
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
