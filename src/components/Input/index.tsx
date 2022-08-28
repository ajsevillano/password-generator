//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';
import React from 'react';

//Interfaces
interface ContextTypes {
  passwordState: PasswordState;
}

interface PasswordState {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Input = () => {
  const { passwordState }: ContextTypes = useContext(GlobalContext);
  const { password }: ContextTypes['passwordState'] = passwordState;

  return (
    <input data-testid="input" type="text" defaultValue={password} readOnly />
  );
};

export default Input;
