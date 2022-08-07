import React, { useState } from 'react';
import { defaultValues } from '../data/defaultValues';

const Context = React.createContext({});

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

interface ContextValues {
  loadingState: Loading;
  passwordState: {};
  passwordLengthState: {};
  checkBoxesState: {};
}

type Loading = {
  loading: boolean;
  setLoading: any;
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
