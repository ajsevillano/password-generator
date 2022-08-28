//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';
import React from 'react';

//Interfaces
interface ContextValuesObject {
  passwordState: {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
  };
}

const Input = () => {
  const { passwordState }: ContextValuesObject = useContext(GlobalContext);
  const { password }: ContextValuesObject['passwordState'] = passwordState;

  return (
    <input data-testid="input" type="text" defaultValue={password} readOnly />
  );
};

export default Input;
