import React from 'react';

const Slider = ({ handleslider, passlength }) => {
  return (
    <input
      type="range"
      min="1"
      max="30"
      onChange={handleslider}
      value={passlength}
    ></input>
  );
};

export default Slider;
