import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CopyButton from './';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the copy button & check its fields', () => {
  render(
    <GlobalContextProvider>
      <CopyButton />
    </GlobalContextProvider>
  );
  const button = screen.getByTestId('copybutton');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('button');
});
