import React, { useState } from 'react';

const Context = React.createContext({});

export function GifsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Context.Provider
      value={{
        loadingState: { loading, setLoading },
        passwordState: { password, setPassword },
      }}
    >
      {children}
    </Context.Provider>
  );
}
export default Context;
