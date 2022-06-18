import React from 'react';
import ReactDOM from 'react-dom';
import './Globals.css';
import App from './components/App';
import { GifsContextProvider } from './context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GifsContextProvider>
      <App />
    </GifsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
