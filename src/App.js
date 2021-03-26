import './App.css';
import React, { useState } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

import { FcLock } from 'react-icons/fc';

const App = () => {
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    let randomPassword = '';
    for (let step = 0; step < 20; step++) {
      const getRandomLower = () => {
        return String.fromCharCode(
          Math.floor(Math.random() * (122 - 97 + 1)) + 97
        );
      };
      randomPassword += getRandomLower();
    }
    setPassword(randomPassword);
  };
  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <Input />
        <Button handleClick={(e) => handleClick(e)} />
      </div>
    </Layout>
  );
};

export default App;
