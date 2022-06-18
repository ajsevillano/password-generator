import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GlobalContextProvider } from '../../context/GlobalContext';
import Slider from './';

it('renders slider component to the screen', () => {
  render(
    <GlobalContextProvider>
      <Slider />
    </GlobalContextProvider>
  );
  const slider = screen.getByTestId('slider');
  expect(slider).toBeInTheDocument();
});
