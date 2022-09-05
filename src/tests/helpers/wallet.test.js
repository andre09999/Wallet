import React from 'react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../../components/WalletForm';
import { renderWithRouterAndRedux } from './renderWith';

const valueInput = 'value-input';
const descriptionInput = 'description-input';
const currencyInput = 'currency-input';
const methodInput = 'method-input';
const tagInput = 'tag-input';

describe('Testing the WalletForm component...', () => {
  it('should have pathname equal to /', () => {
    const { history } = renderWithRouterAndRedux(<WalletForm />);
    expect(history.location.pathname).toBe('/');
  });

  it('tests valueInput data-testid', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
    expect(getByTestId(valueInput)).toBeDefined();
  });
  it('tests descriptionInput data-testid', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
   expect(getByTestId(descriptionInput)).toBeDefined();
  });
  it('tests currencyInput data-testid', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
   expect(getByTestId(currencyInput)).toBeDefined();
  });
  it('tests methodInput data-testid', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
   expect(getByTestId(methodInput)).toBeDefined();
  });
  it('tests tagInput data-testid', () => {
    const { getByTestId } = renderWithRouterAndRedux(<WalletForm />);
   expect(getByTestId(tagInput)).toBeDefined();
  });

  it('testa o borao adiocionar despesa', () => {
    const { getByRole } = renderWithRouterAndRedux(<WalletForm />);
    const button = getByRole('button', { name: /adicionar despesa/i });
    expect(button).toBeDefined();
  });

  it('verifica se e adiocionado valor total', () => {
    const { getByTestId, getByRole } = renderWithRouterAndRedux(<WalletForm />);
    const value = getByTestId('value-input');
    const description = getByTestId('description-input');
    userEvent.type(value, '1000');
    expect(value.value).toBe('1000');
    userEvent.type(description, 'anel');
    expect(description.value).toBe('anel');
    const button = getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(button);
    expect(value.value).toBe('');
    expect(description.value).toBe('');
  });
});