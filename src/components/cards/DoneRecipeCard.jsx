import PropTypes from 'prop-types';
import React from 'react';
// import shareIcon from '../../images/shareIcon.svg';
import ShareBtn from '../buttons/ShareBtn';

export default function DoneRecipeCard({ recipe, index }) {
  const {
    id,
    name,
    image,
    category,
    doneDate,
    tags,
    type,
    nationality,
    alcoholicOrNot,
  } = recipe;
  return (
    <div>
      <h2 data-testid={ `${index}-horizontal-name` }>{name }</h2>
      <img data-testid={ `${index}-horizontal-image` } src={ image } alt={ name } />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {type === 'meal' ? `${nationality} - ${category}` : alcoholicOrNot}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>

      {tags.length > 0 && tags.map((tag) => (
        <p
          key={ tag }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </p>

      ))}

      <ShareBtn
        id={ id }
        testID={ `${index}-horizontal-share-btn` }
        donePage
      />

    </div>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.any,
  recipe: PropTypes.shape({
    category: PropTypes.string,
    doneDate: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.shape({
      length: PropTypes.number,
      map: PropTypes.func,
    }),
  }),
}.isRequired;
