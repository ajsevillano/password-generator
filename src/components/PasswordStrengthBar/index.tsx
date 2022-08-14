//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

//Data
import { passwordStrengthValues } from '../../data/passwordStrengthValues';
import React from 'react';

//Interfaces
interface Contexts {
  [loadingState: string]: {};
}

//TO FIX
interface Password {
  [loadingState: string]: string;
}

interface Element {
  max: any;
  min: any;
  name: string;
}

const PasswordStrengthBar = () => {
  //Context
  const { passwordLengthState }: Contexts = useContext(GlobalContext);
  const { passLength }: Password = passwordLengthState;

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
