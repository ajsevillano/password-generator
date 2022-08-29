import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '.';

it('renders title component to the screen', () => {
  render(<Title />);
  const mainContainer = screen.getByTestId('title');
  expect(mainContainer).toBeInTheDocument();
});

it('check the title is in the component', () => {
  render(<Title />);
  const title = screen.getByText(/Do you need a secure password?/i);
  expect(title).toBeInTheDocument();
});

it('check the subtitle is in the component', () => {
  render(<Title />);
  const subTitle = screen.getByText(
    /Generate a secure password to use on a daily basics!/i
  );
  expect(subTitle).toBeInTheDocument();
});
