import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { useLocation } from 'react-router-dom/';
import shareIcon from '../../images/shareIcon.svg';

export default function ShareBtn({ id }) {
  const [showAlert, setShowAlert] = useState(false);
  const { pathname } = useLocation();

  let url = `${window.location.origin}/meals/${id}`;

  if (pathname.includes('drinks')) {
    url = `${window.location.origin}/drinks/${id}`;
  }

  return (
    <div className="sharingBtn">
      {showAlert && <p>Link copied!</p>}
      <button
        className="share-btn"
        type="button"
        data-testid="share-btn"
        onClick={ async () => {
          await copy(url);
          setShowAlert(true);
        } }
      >
        <img src={ shareIcon } alt="shareBtn" />
      </button>
    </div>
  );
}

ShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
