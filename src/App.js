import './App.css';
import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

import { generatePassword, setPasswordLength } from './helpers';

import { FcLock } from 'react-icons/fc';

const App = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(20);
  const [isLowerCase, setisLowerCase] = useState(false);

  useEffect(() => {
    setPasswordLength(passLength);
    setPassword(generatePassword(isLowerCase));
  }, [isLowerCase]);

  function handleClick(e) {
    e.preventDefault();
    setPasswordLength(passLength);
    setPassword(generatePassword(isLowerCase));
  }

  const handleCheckBox = () => {
    isLowerCase === true ? setisLowerCase(false) : setisLowerCase(true);
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
          isLowerCase={isLowerCase}
        />
        Lowercase
        <input type="checkbox" name="numbers" id="numbers" /> Numbers
        <input type="checkbox" name="symbols" id="symbols" /> Symbols
      </div>
    </Layout>
  );
};

export default App;
