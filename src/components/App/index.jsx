//Libs
import React, { useEffect, useContext } from 'react';
import { generatePassword } from '../../utils/helpers';

//Context
import GlobalContext from '../../context/GlobalContext';

//Components
import Layout from '../Layout';
import Input from '../Input';
import CopyButton from '../CopyButton';
import CheckBox from '../Checkbox';
import Slider from '../Range-Slider';
import PasswordStrengthBar from '../PasswordStrengthBar';
import RefreshButton from '../RefreshButton';

//Icons
import { FcLock } from 'react-icons/fc';

const App = () => {
  //Contexts
  const { passwordState, passwordLengthState, checkBoxesState } =
    useContext(GlobalContext);
  const { setPassword } = passwordState;
  const { passLength } = passwordLengthState;
  const { checkBoxes, setCheckBoxes } = checkBoxesState;

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

  console.log(checkBoxes);

  return (
    <Layout>
      <div className="input-container" data-testid="app">
        <FcLock size={35} className={'lock-icon'} />
        <RefreshButton />
        <PasswordStrengthBar />
        <Input />
        <CopyButton />
      </div>

      <div className="slider-container-section">
        <p className="slider-p">
          Password length:<span> {passLength} </span>
        </p>
        <div className="slider-container">
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
