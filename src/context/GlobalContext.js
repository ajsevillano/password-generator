import React, { useState } from 'react';
import { defaultValues } from '../data/defaultValues';

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(defaultValues.defaultLength);

  return (
    <Context.Provider
      value={{
        loadingState: { loading, setLoading },
        passwordState: { password, setPassword },
        passwordLengthState: { passLength, setPassLength },
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
