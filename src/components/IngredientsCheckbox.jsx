import PropTypes from 'prop-types';
import React from 'react';

function IngredientsCheckbox({ details }) {
  let ingredientsKeys = [];
  let measuresKeys = [];

  if (details) {
    ingredientsKeys = Object.keys(details).filter((key) => key.includes('Ingredient'));
    measuresKeys = Object.keys(details).filter((key) => key.includes('Measure'));
  }

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
                >
                  <input
                    type="checkbox"
                    name={ details[key] }
                    id={ details[key] }
                    value={ details[key] }
                  />
                  {`${details[measuresKeys[index]]} ${details[key]}`}
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
