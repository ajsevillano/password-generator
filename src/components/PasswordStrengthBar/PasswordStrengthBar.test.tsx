import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordStrengthBar from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the password strength bar to the screen', () => {
  render(
    <GlobalContextProvider>
      <PasswordStrengthBar />
    </GlobalContextProvider>
  );
  const mainContainer = screen.getByTestId('container');
  expect(mainContainer).toBeInTheDocument();
});

it('the bar has styles for the main bar and the background bar', () => {
  render(
    <GlobalContextProvider>
      <PasswordStrengthBar />
    </GlobalContextProvider>
  );
  const container = screen.getByTestId('container');
  const containerBackground = screen.getByTestId('containerBackground');
  expect(container).toHaveClass('secure-bar');
  expect(containerBackground).toHaveClass('secure-bar-background');
});
