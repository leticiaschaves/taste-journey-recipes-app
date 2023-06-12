import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtn() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && <p>Link copied!</p>}
      <button
        type="button"
        data-testid="share-btn"
        onClick={ async () => {
          await copy(window.location.href);
          setShowAlert(true);
        } }
      >
        <img src={ shareIcon } alt="shareBtn" />
      </button>
    </div>
  );
}
