//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';
import React from 'react';

//Interfaces
interface Contexts {
  [loadingState: string]: {};
}

//TO FIX
interface Password {
  [loadingState: string]: string;
}

const Input = () => {
  const { passwordState }: Contexts = useContext(GlobalContext);
  const { password }: Password = passwordState;

  return (
    <input data-testid="input" type="text" defaultValue={password} readOnly />
  );
};

export default Input;
