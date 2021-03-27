import './App.css';
import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

import { generatePassword, setPasswordLength } from './helpers';

import { FcLock } from 'react-icons/fc';

const App = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(10);
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    setPasswordLength(passLength);
    setPassword(generatePassword());
  }, [checked]);

  function handleClick(e) {
    e.preventDefault();
    setPassword(generatePassword());
  }

  const handleCheckBox = () => {
    checked === true ? setchecked(false) : setchecked(true);
  };

  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <Input value={password} />
        <Button handleClick={handleClick} />
      </div>
      <div className="checkboxes-container">
        <input type="checkbox" name="upperCase" id="upperCase" />
        Uppercase
        <input
          type="checkbox"
          name="lowerCase"
          id="lowerCase"
          onChange={handleCheckBox}
          checked={checked}
        />
        Lowercase
        <input type="checkbox" name="numbers" id="numbers" /> Numbers
        <input type="checkbox" name="symbols" id="symbols" /> Symbols
      </div>
    </Layout>
  );
};

export default App;
