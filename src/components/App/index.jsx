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
import RefreshButton from '../RefreshButton';

//Data
import { defaultValues } from '../../data/defaultValues';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const App = () => {
  const [checkBoxes, setCheckBoxes] = useState(defaultValues.checkBoxesValues);
  const { passwordState, passwordLengthState } = useContext(GlobalContext);
  const { setPassword } = passwordState;
  const { passLength } = passwordLengthState;

  useEffect(() => {
    setPassword(generatePassword(checkBoxes, passLength));
  }, [checkBoxes, passLength, setPassword]);

  //Update CheckBox
  const updateCheckBox = (e) => {
    const updateCheckBox = checkBoxes.map((eachCheckBox) => {
      return eachCheckBox.name === e.target.name
        ? { ...eachCheckBox, isChecked: e.target.checked }
        : eachCheckBox;
    });
    return updateCheckBox;
  };

  return (
    <Layout>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <RefreshButton checkBoxes={checkBoxes} />
        <SecureBar />
        <Input />
        <CopyButton checkBoxes={checkBoxes} />
      </div>

      <div className="slider-container">
        <p className="slider-p">
          Password length:<span> {passLength} </span>
        </p>
        <div className="mega-container">
          <Slider />
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
            filters={checkBoxes.map((checked) => checked.isChecked)}
            setCheckBoxes={setCheckBoxes}
            updateCheckBox={updateCheckBox}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
