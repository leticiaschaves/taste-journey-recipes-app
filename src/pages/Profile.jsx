import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user')) || { email: '' };

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div>
      <Header title="Profile" />

      <h1 data-testid="profile-email">{email}</h1>

      <button
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => handleClick('/done-recipes') }
      >
        {' '}
        Done Recipes
        {' '}
      </button>
      <button
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => handleClick('/favorite-recipes') }
      >
        {' '}
        Favorite Recipes
        {' '}
      </button>
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ () => {
          localStorage.clear();
          handleClick('/');
        } }
      >
        {' '}
        Logout
        {' '}
      </button>

      <Footer />
    </div>
  );
}
