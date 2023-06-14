import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import mealCategories from '../../cypress/mocks/mealCategories';

describe('Testa o componente Recipes da aplicação', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockImplementation(fetch);

    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => { });
    const { history } = renderWithRouterAndRedux(<App />);
    const btn = screen.getByTestId('login-submit-btn');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    userEvent.type(email, 'user@user.com');
    userEvent.type(password, 'strongPassword.com');

    await waitFor(() => {
      userEvent.click(btn);
      const { pathname } = history.location;
      expect(pathname).toBe('/meals');
    });
    const search = screen.getByTestId('search-top-btn');
    const profile = screen.getByAltText(/profile-icon/i);

    expect(search).toBeVisible();
    expect(profile).toBeInTheDocument();

    userEvent.click(search);
  });

  // beforeEach(() => {
  //   jest.spyOn(global, 'fetch');
  //   global.fetch = jest.fn().mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mealCategories),
  //   });
  //   render(<App />);
  // });

  // it('Testa se a função handleClear é executada corretamente quando clica no botão "all", mockando os resultados da API', () => {
  //   renderWithRouterAndRedux(<App />);
  //   const allButton = screen.getByTestId('All-category-filter');
  //   const beefButton = screen.getByTestId('Beef-category-filter');

  //   userEvent.click(beefButton);
  //   userEvent.click(allButton);

  //   waitFor(() => {
  //     expect(screen.getByText(/kumpir/i)).toBeInTheDocument();
  //   });
  // });

  it('testa se o botão Start Recipe está funcionando corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const recipeCar = screen.getByTestId('3-recipe-card');
    userEvent.click(recipeCar);
    waitFor(() => {
      expect(screen.getByText(/barabam/i)).toBeInTheDocument();
    });
  });
});
