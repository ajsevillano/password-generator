//Libs
import React, { useState, useEffect } from 'react';
import { generatePassword } from '../../utils/helpers';

//Icons
import { FcLock } from 'react-icons/fc';

//Components
import Layout from '../Layout';
import Input from '../Input';
import CopyButton from '../CopyButton';
import CheckBox from '../Checkbox';
import Slider from '../Range-Slider';
import SecureBar from '../SecureBar';

//Data
import { defaultValues } from '../../data/defaultValues';
import RefreshButton from '../RefreshButton';

const App = () => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passLength, setPassLength] = useState(defaultValues.defaultLength);
  const [checkBoxes, setCheckBoxes] = useState(defaultValues.checkBoxesValues);

  useEffect(() => {
    setPassword(generatePassword(checkBoxes, passLength));
  }, [checkBoxes, passLength]);

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

  return (
    <Layout>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <RefreshButton loading={loading} />
        <SecureBar passLength={passLength} />
        <Input value={password} />
        <CopyButton
          password={password}
          setLoading={setLoading}
          setPassword={setPassword}
          checkBoxes={checkBoxes}
          passLength={passLength}
        />
      </div>

      <div className="slider-container">
        <p className="slider-p">
          Password length:<span> {passLength} </span>
        </p>
        <div className="mega-container">
          <Slider passLength={passLength} setPassLength={setPassLength} />
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