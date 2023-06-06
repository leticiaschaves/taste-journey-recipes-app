import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';

const searchInput = 'search-input';
const searchButton = 'exec-search-btn';
const mealsAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken';
// const drinksAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
const alertMessage = 'Your search must have only 1 (one) character';

describe('Testa os componentes Header e SearchBar da aplicação', () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockImplementation(fetch);

    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});
    const { history } = renderWithRouterAndRedux(<App />);
    const btn = screen.getByTestId('login-submit-btn');
    const email = screen.getByRole('textbox', { name: /e-mail/i });
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
  it('Deve pesquisar por nome corretamente', () => {
    const name = screen.getByText(/name/i);
    const input = screen.getByTestId(searchInput);
    const searchBtn = screen.getByTestId(searchButton);

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    userEvent.type(input, 'chicken');
    userEvent.click(name);
    userEvent.click(searchBtn);

    waitFor(() => {
      expect(screen.getAllByText(/Chicken Handi/i)).toBeInTheDocument();
    });
  });
  it('Deve pesquisar por ingrediente corretamente e realizar requisição à API', () => {
    const ingredient = screen.getByText(/ingredients/i);
    const input = screen.getByTestId(searchInput);
    const searchBtn = screen.getByTestId(searchButton);

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    userEvent.type(input, 'chicken');
    userEvent.click(ingredient);
    userEvent.click(searchBtn);

    expect(global.fetch).toBeCalledWith(mealsAPI);

    waitFor(() => {
      expect(screen.getAllByText(/Brown Stew Chicken/i)).toBeInTheDocument();
    });
  });
  it('Deve pesquisar pela primeira letra corretamente', () => {
    const firstLetter = screen.getByText(/first letter/i);
    const input = screen.getByTestId(searchInput);
    const searchBtn = screen.getByTestId(searchButton);

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    userEvent.type(input, 'c');
    userEvent.click(firstLetter);
    userEvent.click(searchBtn);

    waitFor(() => {
      expect(screen.getAllByText(/Chocolate Gateau/i)).toBeInTheDocument();
    });
  });
  it('Deve retornar um alerta, caso a pesquisa seja inválida', () => {
    const firstLetter = screen.getByText(/first letter/i);
    const input = screen.getByTestId(searchInput);
    const searchBtn = screen.getByTestId(searchButton);

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    userEvent.type(input, 'chocolate');
    userEvent.click(firstLetter);
    userEvent.click(searchBtn);

    waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(alertMessage);
    });
  });
});

// EM CONSTRUÇÃO
// describe('Testa o Header e SearchBar da página drinks', () => {
//   it('Deve realizar busca na searchBar e chamar a API', async () => {
//     const { history } = renderWithRouterAndRedux(<App />);
//     const btn = screen.getByTestId('login-submit-btn');
//     const email = screen.getByRole('textbox', { name: /e-mail/i });
//     const password = screen.getByTestId('password-input');

//     userEvent.type(email, 'user@user.com');

//     userEvent.type(password, 'strongPassword.com');

//     await waitFor(() => {
//       userEvent.click(btn);
//       const { pathname } = history.location;
//       expect(pathname).toBe('/drinks');
//     });
//     const search = screen.getByTestId('search-top-btn');
//     const profile = screen.getByAltText(/profile-icon/i);

//     expect(search).toBeVisible();
//     expect(profile).toBeInTheDocument();

//     waitFor(() => {
//       userEvent.click(search);

//       expect(history.location.pathname).toBe('/drinks');
//     });
//     const input = screen.getByTestId(searchInput);
//     const searchBtn = screen.getByTestId(searchButton);
//     expect(input).toBeInTheDocument();
//     expect(searchBtn).toBeInTheDocument();
//     userEvent.type(input, 'c');
//     userEvent.click(firstLetter);
//     userEvent.click(searchBtn);

//     expect(global.fetch).toBeCalledWith(drinksAPI);

//     waitFor(() => {
//       expect(screen.getAllByText(/Casino/i)).toBeInTheDocument();
//     });
//   });
// });
