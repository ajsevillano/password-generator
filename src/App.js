import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';
import CheckBox from './components/Checkbox/Index';
import Slider from './components/Range-Slider/index';

import { generatePassword, setPasswordLength } from './helpers';

import { FcLock } from 'react-icons/fc';
import { FaSync } from 'react-icons/fa';

const App = () => {
  const inputEl = useRef('');

  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(14);
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 0,
      name: 'uppercase',
      label: 'Uppercase',
      isChecked: true,
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
      isChecked: true,
    },
    {
      id: 3,
      name: 'numbers',
      label: 'Numbers',
      isChecked: true,
    },
  ]);

  const [filters, setFilters] = useState({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  });

  const { uppercase, lowercase, symbols, numbers } = filters;

  useEffect(() => {
    setPasswordLength(passLength);
    setPassword(generatePassword(uppercase, lowercase, symbols, numbers));
  }, [checkBoxes, passLength]);

  //Generate Password Button
  function handleClick(e) {
    e.preventDefault();
    setPasswordLength(passLength);
    setPassword(generatePassword(uppercase, lowercase, symbols, numbers));
  }

  //Checkboxes Handler
  const handleCheckBox = (e) => {
    const updateCheckBox = checkBoxes.map((eachCheckBox) => {
      return eachCheckBox.name === e.target.name
        ? { ...eachCheckBox, isChecked: e.target.checked }
        : eachCheckBox;
    });

    const setFilterValues = {
      ...filters,
      [e.target.name]: e.target.checked,
    };

    setCheckBoxes(updateCheckBox);
    setFilters(setFilterValues);
  };

  //Slider Handler
  const handleSlider = (e) => {
    setPassLength(e.target.value);
  };

  //Copy to Clipboard
  const copyToClipBoard = () => {
    // Execute deprecated execCommand if browser doesn't allow clipboard Api.
    return !navigator.clipboard
      ? (inputEl.current.select(), document.execCommand('copy'))
      : //Otherwhise
        navigator.clipboard.writeText(inputEl.current.innerText);
  };

  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <div className="sync-container" onClick={handleClick}>
          <FaSync size={35} className={'sync-icon'} />
        </div>

        <div ref={inputEl} className="password">
          {password}
        </div>
        <Input />
        <Button copyToClipBoard={copyToClipBoard} />
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
      </div>
      <div className="slider-container">
        <p>Password Length: {passLength}</p>
        <Slider handleslider={handleSlider} passlength={passLength} />
      </div>
    </Layout>
  );
};

export default App;
