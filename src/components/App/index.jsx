//Libs
import React, { useState, useEffect, useRef } from 'react';
import { generatePassword } from '../../utils/helpers';

//Icons
import { FcLock } from 'react-icons/fc';
import { FaSync } from 'react-icons/fa';

//Components
import Layout from '../Layout';
import Input from '../Input';
import Button from '../Button';
import CheckBox from '../Checkbox';
import Slider from '../Range-Slider';
import SecureBar from '../SecureBar';

//Data
import { defaultValues } from '../../data/defaultValues';

//Sounds
import Confirm from '../../assets/confirm.wav';

const App = () => {
  const [passwordCopied, setpasswordCopied] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passLength, setPassLength] = useState(defaultValues.defaultLength);
  const [checkBoxes, setCheckBoxes] = useState(defaultValues.checkBoxesValues);

  useEffect(() => {
    setPassword(generatePassword(checkBoxes, passLength));
  }, [checkBoxes, passLength]);

  //Generate Password Button
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setPassword(generatePassword(checkBoxes, passLength));
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

    setLoading(true);
    setCheckBoxes(updateCheckBox);
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
          (password,
          document.execCommand('copy'),
          confirmSound.play(),
          setpasswordCopied(true))
        : // Otherwhise
          navigator.clipboard.writeText(password),
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
        <Input value={password} />
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
            filters={checkBoxes.map((checked) => checked.isChecked)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
