import React from 'react';
import meal from '../images/mealIcon.svg';
import drink from '../images/drinkIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
    >
      <button type="button">
        <img
          data-testid="meals-bottom-btn"
          src={ meal }
          alt="food"
        />
      </button>
      <button type="button">
        <img
          data-testid="drinks-bottom-btn"
          src={ drink }
          alt="drink"
        />
      </button>
    </footer>
  );
}
export default Footer;
