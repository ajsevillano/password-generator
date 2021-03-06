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

import Confirm from './assets/confirm.wav';

const App = () => {
  const inputEl = useRef('');

  const [passwordCopied, setpasswordCopied] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passLength, setPassLength] = useState(16);
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 0,
      name: 'uppercase',
      label: 'Uppercase',
      labelMobile: 'ABC',
      isChecked: true,
    },
    {
      id: 1,
      name: 'lowercase',
      label: 'Lowercase',
      labelMobile: 'abc',
      isChecked: true,
    },
    {
      id: 2,
      name: 'symbols',
      label: 'Symbols',
      labelMobile: '#@!',
      isChecked: true,
    },
    {
      id: 3,
      name: 'numbers',
      label: 'Numbers',
      labelMobile: '123',
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
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setPasswordLength(passLength);
      setPassword(generatePassword(uppercase, lowercase, symbols, numbers));
    }, 200);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

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

    setLoading(true);
    setCheckBoxes(updateCheckBox);
    setFilters(setFilterValues);

    setTimeout(() => {
      setLoading(false);
    }, 450);
  };

  //Slider Handler
  const handleSlider = (e) => {
    setPassLength(e.target.value);
  };

  //Copy to Clipboard Button
  const copyToClipBoard = () => {
    const confirmSound = new Audio(Confirm);
    return (
      !navigator.clipboard
        ? // Execute deprecated execCommand if browser doesn't allow clipboard Api.
          (inputEl.current.select(),
          document.execCommand('copy'),
          confirmSound.play(),
          setpasswordCopied(true))
        : // Otherwhise
          navigator.clipboard.writeText(inputEl.current.value),
      confirmSound.play(),
      setpasswordCopied(true),
      setTimeout(() => {
        setpasswordCopied(false);
      }, 1000)
    );
  };

  return (
    <Layout>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <div className="sync-container" onClick={handleClick}>
          <FaSync size={30} className={!loading ? '' : 'sync-animation'} />
        </div>
        <SecureBar passLength={passLength} />
        <Input inputRef={inputEl} value={password} />
        <Button
          copyToClipBoard={copyToClipBoard}
          passwordCopied={passwordCopied}
        />
      </div>

      <div className="slider-container">
        <p className="slider-p">
          Password length:<span> {passLength} </span>
        </p>
        <div className="mega-container">
          <Slider handleslider={handleSlider} passLength={passLength} />
        </div>
      </div>
      <div className="checkboxes-container">
        <svg className="inline-svg">
          <symbol id="check" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </symbol>
        </svg>
        {checkBoxes.map((eachCheckBox) => (
          <CheckBox
            key={eachCheckBox.id}
            name={eachCheckBox.name}
            label={eachCheckBox.label}
            labelMobile={eachCheckBox.labelMobile}
            isChecked={eachCheckBox.isChecked}
            onChange={handleCheckBox}
            filters={filters}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
