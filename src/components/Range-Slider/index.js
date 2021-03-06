import React from 'react';

const Slider = ({ handleslider, passLength }) => {
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
        type="range"
        min="1"
        max="30"
        onChange={handleslider}
        value={passLength}
        className="range"
      ></input>
    </>
  );
};

export default Slider;
