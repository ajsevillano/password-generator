import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GifsContextProvider } from '../../context/GlobalContext';
import Slider from './';

it('renders slider component to the screen', () => {
  render(
    <GifsContextProvider>
      <Slider />
    </GifsContextProvider>
  );
  const slider = screen.getByTestId('slider');
  expect(slider).toBeInTheDocument();
});
