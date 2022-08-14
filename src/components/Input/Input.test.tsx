import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the input field & check its fields', () => {
  render(
    <GlobalContextProvider>
      <Input />
    </GlobalContextProvider>
  );
  const input = screen.getByTestId('input');
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('readOnly');
});
