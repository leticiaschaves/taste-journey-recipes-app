import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import DrinkDetail from '../components/DrinkDetail';
// import App from '../App';

describe('Testa o componente DrinkDetails', () => {
  it('Testa se o componente DrinkDetails é renderizado', () => {
    const { getByTestId } = renderWithRouterAndRedux(<DrinkDetail />);
    const drinkDetail = getByTestId('recipe-title');
    expect(drinkDetail).toBeInTheDocument();
  });

  it('');
});
