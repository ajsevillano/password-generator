import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RefreshButton from './index';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders refresh button to the screen', () => {
  render(
    <GlobalContextProvider>
      <RefreshButton />
    </GlobalContextProvider>
  );
  const mainContainer = screen.getByTestId('refreshbutton');
  expect(mainContainer).toBeInTheDocument();
});

it('The icon will spin when is clicked', () => {
  render(
    <GlobalContextProvider>
      <RefreshButton />
    </GlobalContextProvider>
  );
  const button = screen.getByRole('button');
  const icon = screen.getByTestId('icon');
  fireEvent.click(button);
  expect(icon).toHaveClass('sync-animation');
});
