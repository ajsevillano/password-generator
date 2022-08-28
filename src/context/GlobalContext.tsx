import React, { useState } from 'react';
import { checkBoxesDefaultValues } from '../data/defaultValues';

//Added this as ContextValues, investigate tomorrow
const Context = React.createContext({} as ContextValuesObject);

type Props = {
  children: JSX.Element;
};

interface CheckBoxes {
  id: number;
  name: string;
  label: string;
  labelMobile: string;
  isChecked: boolean;
}

interface ContextValuesObject {
  loadingState: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
  passwordState: {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
  };
  passwordLengthState: {
    passLength: number;
    setPassLength: React.Dispatch<React.SetStateAction<number>>;
  };
  checkBoxesState: {
    checkBoxes: Array<CheckBoxes>;
    setCheckBoxes: React.Dispatch<React.SetStateAction<CheckBoxes[]>>;
  };
}

interface ContextStates {
  loading: boolean;
  password: string;
  passLength: number;
  checkBoxes: Array<CheckBoxes>;
}

export function GlobalContextProvider({ children }: Props) {
  const [loading, setLoading] = useState<ContextStates['loading']>(false);
  const [password, setPassword] = useState<ContextStates['password']>('');
  const [passLength, setPassLength] = useState<ContextStates['passLength']>(16);
  const [checkBoxes, setCheckBoxes] = useState<ContextStates['checkBoxes']>(
    checkBoxesDefaultValues.values
  );

  const contextValuesObject: ContextValuesObject = {
    loadingState: { loading, setLoading },
    passwordState: { password, setPassword },
    passwordLengthState: { passLength, setPassLength },
    checkBoxesState: { checkBoxes, setCheckBoxes },
  };

  return (
    <Context.Provider value={contextValuesObject}>{children}</Context.Provider>
  );
}
export default Context;
