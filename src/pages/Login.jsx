import React from 'react';

function Login() {
  return (
    <div>
      <form action="submit">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" data-testid="email-input" />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
        />
        <button type="submit" data-testid="login-submit-btn">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
