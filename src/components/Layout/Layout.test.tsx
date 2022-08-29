import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the header to the screen', () => {
  render(
    <GlobalContextProvider>
      <Layout />
    </GlobalContextProvider>
  );
  const mainContainer = screen.getByTestId('layout');
  expect(mainContainer).toBeInTheDocument();
});
