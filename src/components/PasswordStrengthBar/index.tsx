import React from 'react';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

//Data
import { passwordStrengthValues } from '../../data/passwordStrengthValues';

//Interfaces
interface ContextTypes {
  passwordLengthState: PasswordLengthState;
}

interface PasswordLengthState {
  passLength: number;
  setPassLength: (targetValue: number) => void;
}

interface Element {
  max: number;
  min: number;
  name: string;
}

const PasswordStrengthBar = () => {
  //Context
  const { passwordLengthState }: ContextTypes = useContext(GlobalContext);
  const { passLength }: ContextTypes['passwordLengthState'] =
    passwordLengthState;

  const getPasswordStrength = () => {
    const filterValue = passwordStrengthValues.filter(
      (element: Element) =>
        passLength >= element.min && passLength <= element.max
    );
    return filterValue[0].name;
  };

  return (
    <>
      <div
        data-testid="container"
        className={`secure-bar ${getPasswordStrength()}`}
      ></div>
      <div
        data-testid="containerBackground"
        className={`secure-bar-background ${getPasswordStrength()}`}
      ></div>
    </>
  );
};

export default PasswordStrengthBar;
