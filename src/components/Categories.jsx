import PropTypes from 'prop-types';
import React from 'react';

export default function Categories({ categories }) {
  return (
    <div>
      { categories && categories.map(({ strCategory }) => (
        <div key={ strCategory }>
          <button
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>
        </div>))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
