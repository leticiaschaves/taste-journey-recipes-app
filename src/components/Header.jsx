import PropTypes from 'prop-types';
import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title }) {
  return (
    <header>
      { (title === 'Drinks' || title === 'Meals')
        && <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" /> }
      <img src={ profileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      <h2 data-testid="page-title">{ title }</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
