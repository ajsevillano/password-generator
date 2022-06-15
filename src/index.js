import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/App';
import GlobalContext from './context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
