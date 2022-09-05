import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

const EMAIL_INPUT = 'email-input'
const PASSWORD_INPUT = 'password-input'

describe('Testing the App and Login components...', () => {
  it('Verifica se ta na pagina /', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });

  it('Ve se tem placeholder email', () => {
    const { getByPlaceholderText } = renderWithRouterAndRedux(<App />);
    const email = getByPlaceholderText(/email/i);
    expect(email).toBeDefined();
  });
  it('Ve se tem placeholder senha', () => {
    const { getByPlaceholderText } = renderWithRouterAndRedux(<App />);
    const senha = getByPlaceholderText(/senha/i);
    expect(senha).toBeDefined();
  });

  it('verifica data-testid of Email', () => {
    const { getByTestId } = renderWithRouterAndRedux(<App />);
    const email = getByTestId(EMAIL_INPUT)
    expect(email).toBeDefined();
  });
  it('verifica data-testid Password', () => {
    const { getByTestId } = renderWithRouterAndRedux(<App />);
    const password =  getByTestId(PASSWORD_INPUT)
    expect(password).toBeDefined();
  });

  it('se da para clicar no botao', () => {
    const { getByTestId, getByRole } = renderWithRouterAndRedux(<App />);
    const email = getByTestId(EMAIL_INPUT);
    const password= getByTestId(PASSWORD_INPUT);
    const button = getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'andre@gmail.com');
    userEvent.type(password, '310513');
    expect(button).toBeEnabled();
    userEvent.click(button);
  });
});