import React from 'react';

const Slider = ({ handleslider, refI }) => {
  return (
    <input
      type="range"
      min="1"
      max="50"
      onChange={handleslider}
      ref={refI}
    ></input>
  );
};

export default Slider;
