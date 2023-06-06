import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title }) {
  const location = useLocation();
  const { pathname } = location;

  let pageTitle = title;
  let search = null;

  if (pathname === '/drinks') {
    pageTitle = 'Drinks';
    search = <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />;
  } else if (pathname === '/meals') {
    pageTitle = 'Meals';
    search = <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />;
  }

  return (
    <header>
      { search }
      <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      <h2 data-testid="page-title">{ pageTitle }</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
