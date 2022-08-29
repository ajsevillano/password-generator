import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckBox from '.';
import { GlobalContextProvider } from '../../context/GlobalContext';

it('renders the checkbox to the screen', () => {
  render(
    <GlobalContextProvider>
      <CheckBox {...checkBoxProps} />
    </GlobalContextProvider>
  );

  const inputcheckbox = screen.getByTestId('inputcheckbox');
  expect(inputcheckbox).toBeInTheDocument();
});

it('check the component is receiving the props', () => {
  render(
    <GlobalContextProvider>
      <CheckBox {...checkBoxProps} />
    </GlobalContextProvider>
  );

  const inputcheckbox = screen.getByTestId('inputcheckbox');
  const label = screen.getByText(/Uppercase/i);
  expect(inputcheckbox).toHaveAttribute('checked');
  expect(label).toBeInTheDocument();
});

const checkBoxProps = {
  name: 'uppercase',
  setCheckBoxes: jest.fn(),
  label: 'Uppercase',
  labelMobile: 'ABC',
  isChecked: true,
  filters: [],
  updateCheckBox: jest.fn(),
};
