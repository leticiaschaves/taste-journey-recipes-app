import React from 'react';
import { useHistory } from 'react-router-dom';
import meal from '../images/mealIcon.svg';
import drink from '../images/drinkIcon.svg';

function Footer() {
  const history = useHistory();

  return (
    <footer
      data-testid="footer"
    >
      <button type="button" onClick={ () => history.push('/meals') }>
        <img
          data-testid="meals-bottom-btn"
          src={ meal }
          alt="food"
        />
      </button>
      <button type="button" onClick={ () => history.push('/drinks') }>
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
