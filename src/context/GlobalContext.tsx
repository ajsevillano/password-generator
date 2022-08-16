import React, { useState } from 'react';
import { defaultValues } from '../data/defaultValues';

const Context = React.createContext({
  loadingState: { loading: true },
  passwordState: { password: '' },
  passwordLengthState: { passLength: 0 },
  checkBoxesState: { checkBoxes: [{}] },
});

interface ContextStates {
  loading: boolean;
  password: string;
  passLength: number;
  checkBoxes: Array<CheckBoxes>;
}

interface CheckBoxes {
  id: number;
  name: string;
  label: string;
  labelMobile: string;
  isChecked: boolean;
}

interface checkBoxesState {
  checkBoxes: Array<CheckBoxes>;
  setCheckBoxes: React.Dispatch<React.SetStateAction<CheckBoxes[]>>;
}

interface PasswordState {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface PasswordLengthState {
  passLength: number;
  setPassLength: React.Dispatch<React.SetStateAction<number>>;
}

interface ContextValues {
  loadingState: Loading;
  passwordState: PasswordState;
  passwordLengthState: PasswordLengthState;
  checkBoxesState: checkBoxesState;
}

type Loading = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: JSX.Element;
};

export function GlobalContextProvider({ children }: Props) {
  const [loading, setLoading] = useState<ContextStates['loading']>(false);
  const [password, setPassword] = useState<ContextStates['password']>('');
  const [passLength, setPassLength] = useState<ContextStates['passLength']>(
    defaultValues.defaultLength
  );
  const [checkBoxes, setCheckBoxes] = useState<ContextStates['checkBoxes']>(
    defaultValues.checkBoxesValues
  );

  const contextValues: ContextValues = {
    loadingState: { loading, setLoading },
    passwordState: { password, setPassword },
    passwordLengthState: { passLength, setPassLength },
    checkBoxesState: { checkBoxes, setCheckBoxes },
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
}
export default Context;
