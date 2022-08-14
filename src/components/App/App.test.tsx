import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the checkbox to the screen', () => {
  render(
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );

  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
