import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';
import CheckBox from './components/Checkbox/Index';
import Slider from './components/Range-Slider/index';
import SecureBar from './components/SecureBar/Index';

import { generatePassword, setPasswordLength } from './helpers';

import { FcLock } from 'react-icons/fc';
import { FaSync } from 'react-icons/fa';

const App = () => {
  const inputEl = useRef('');

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passLength, setPassLength] = useState(12);
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
  }, [checkBoxes, passLength, uppercase, lowercase, symbols, numbers]);

  //Generate Password Button
  function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setPasswordLength(passLength);
      setPassword(generatePassword(uppercase, lowercase, symbols, numbers));
    }, 200);

    setTimeout(() => {
      setLoading(false);
    }, 300);
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
    return !navigator.clipboard
      ? // Execute deprecated execCommand if browser doesn't allow clipboard Api.
        (inputEl.current.select(), document.execCommand('copy'))
      : // Otherwhise
        navigator.clipboard.writeText(inputEl.current.value);
  };

  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <div className="sync-container" onClick={handleClick}>
          <FaSync size={30} className={!loading ? '' : 'sync-animation'} />
        </div>
        <SecureBar passLength={passLength} />
        <Input inputRef={inputEl} value={password} />
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
            filters={filters}
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
