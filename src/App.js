import './App.css';
import React, { useState, useEffect } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';
import CheckBox from './components/Checkbox/Index';

import { generatePassword, setPasswordLength } from './helpers';

import { FcLock } from 'react-icons/fc';

const App = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(20);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 0,
      name: 'uppercase',
      label: 'Uppercase',
      isChecked: false,
    },
    {
      id: 1,
      name: 'lowercase',
      label: 'Lowercase',
      isChecked: true,
    },
    {
      id: 2,
      name: 'symbols',
      label: 'Symbols',
      isChecked: false,
    },
    {
      id: 3,
      name: 'numbers',
      label: 'Numbers',
      isChecked: false,
    },
  ]);

  useEffect(() => {
    setPasswordLength(passLength);
    setPassword(generatePassword(isLowerCase));
  }, [isLowerCase]);

  function handleClick(e) {
    e.preventDefault();
    setPasswordLength(passLength);
    setPassword(generatePassword(isLowerCase));
  }

  const handleCheckBox = (e) => {
    setCheckBoxes(
      checkBoxes.map((eachCheckBox) => {
        if (eachCheckBox.name == e.target.name) {
          return { ...eachCheckBox, isChecked: e.target.checked };
        } else {
          return eachCheckBox;
        }
      })
    );
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
        {checkBoxes.map((eachCheckBox) => (
          <CheckBox
            key={eachCheckBox.id}
            name={eachCheckBox.name}
            label={eachCheckBox.label}
            isChecked={eachCheckBox.isChecked}
            onChange={handleCheckBox}
          />
        ))}
        {/* <input type="checkbox" name="upperCase" id="upperCase" />
        Uppercase */}

        {/* <input type="checkbox" name="numbers" id="numbers" /> Numbers
        <input type="checkbox" name="symbols" id="symbols" /> Symbols */}
      </div>
    </Layout>
  );
};

export default App;
