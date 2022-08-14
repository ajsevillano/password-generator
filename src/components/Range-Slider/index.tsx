import React from 'react';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

//Interfaces
interface Contexts {
  passLength: any;
  setPassLength: any;
}

const Slider = () => {
  const { passwordLengthState }: any = useContext(GlobalContext);
  const { passLength, setPassLength }: Contexts = passwordLengthState;

  //Slider Handler
  const handleSlider = (e: { target: { value: string } }) => {
    console.log(e);
    setPassLength(e.target.value);
  };

  return (
    <>
      <span className="track-bar">
        <span
          className="progress-bar"
          style={{
            width: `${(passLength * 100) / 30}%`,
          }}
        ></span>
      </span>
      <input
        data-testid="slider"
        type="range"
        min="1"
        max="30"
        onChange={handleSlider}
        value={passLength}
        className="range"
      ></input>
    </>
  );
};

export default Slider;
