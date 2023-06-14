import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import { fetchRecipesByCategory } from '../redux/actions';

// Falta cobrir a linha 26

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

jest.mock('../redux/actions', () => ({
  fetchRecipesByCategory: jest.fn(),
}));

describe('Categories', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ filteredByCategory: false });
    useLocation.mockReturnValue({ pathname: '/drinks' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renderiza sem erros', () => {
    render(<Categories />);
  });

  it('Sdds brunão', () => {
    const categories = [
      { strCategory: 'Category 1' },
      { strCategory: 'Category 2' },
      { strCategory: 'Category 3' },
    ];

    const { getByText } = render(<Categories categories={ categories } />);

    categories.forEach((category) => {
      const button = getByText(category.strCategory);
      expect(button).toBeInTheDocument();
    });
  });

  it('Sdds Sincero', () => {
    const categories = [
      { strCategory: 'Category 1' },
      { strCategory: 'Category 2' },
      { strCategory: 'Category 3' },
    ];

    const { getByText } = render(<Categories categories={ categories } />);
    const button = getByText(categories[0].strCategory);

    fireEvent.click(button);

    expect(fetchRecipesByCategory).toHaveBeenCalledWith(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories[0].strCategory}`,
      false,
    );
  });

  it('Sdds Andre', () => {
    const { getByText } = render(<Categories />);

    const button = getByText('All');
    fireEvent.click(button);

    expect(fetchRecipesByCategory).toHaveBeenCalledWith(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      true,
    );
  });
});

// ... e por aí vai.
