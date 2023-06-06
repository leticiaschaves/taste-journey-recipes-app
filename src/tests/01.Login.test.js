import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Testa a página de login', () => {
  it('Deve renderizar todos os componentes e o botão de login desabilitado', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const loginBtn = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });
  it('Deve permanecer com o botão desabilitado quando apenas um input estiver preenchido', () => {
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByRole('button', { name: /enter/i });
    const email = screen.getByTestId('email-input');

    expect(btn).toBeDisabled();

    userEvent.type(email, 'user@user.com');

    expect(btn).toBeDisabled();
  });
  it('Deve habilitar o botão quando os inputs estiverem preenchidos e alterar a rota para /meals', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const btn = screen.getByTestId('login-submit-btn');
    const email = screen.getByRole('textbox', { name: /e-mail/i });
    const password = screen.getByTestId('password-input');

    expect(btn).toBeDisabled();

    userEvent.type(email, 'user@user.com');

    expect(btn).toBeDisabled();

    userEvent.type(password, 'strongPassword.com');

    expect(btn).toBeEnabled();

    await waitFor(() => {
      userEvent.click(btn);
      const { pathname } = history.location;
      expect(pathname).toBe('/meals');
    }, { timeout: 5000 });
  });
  // it('testa se no click de botão de configurações a rota será "settings"', () => {
  //   const { history } = renderWithRouterAndRedux(<App />);
  //   const configBtn = screen.getByTestId('btn-settings');
  //   userEvent.click(configBtn);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/settings');
  // });
});
// test('Test login page', () => {
//   it('Should test if all components renders', () => {
// renderWithRouterAndRedux(<App />)
// const email = screen.getByTestId('email-input');
// const password = screen.getByTestId('password-input');
// const loginBtn = screen.getByTestId('login-submit-btn');

// expect(email).toBeInTheDocument();
// expect(password).toBeInTheDocument();
// expect(loginBtn).toBeInTheDocument();
//   });
// });
