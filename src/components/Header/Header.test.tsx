import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the header to the screen & check the lock animation is there', () => {
  render(
    <GlobalContextProvider>
      <Header />
    </GlobalContextProvider>
  );
  const mainContainer = screen.getByTestId('header');
  const lock = screen.getByTestId('animation');
  expect(mainContainer).toBeInTheDocument();
  expect(lock).toBeInTheDocument();
});
