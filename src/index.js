import React from 'react';
import { createRoot } from 'react-dom/client';
import './Globals.css';
import App from './components/App';
import { GlobalContextProvider } from './context/GlobalContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
