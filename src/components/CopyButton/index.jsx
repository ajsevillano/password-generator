import { FaCopy } from 'react-icons/fa';
import React, { useState } from 'react';

//Sounds
import Confirm from '../../assets/confirm.wav';

const CopyButton = ({ password }) => {
  const [passwordCopiedAnimation, setpasswordCopiedAnimation] = useState(false);
  //Copy to Clipboard Button
  const copyToClipBoard = () => {
    const confirmSound = new Audio(Confirm);
    return (
      navigator.clipboard.writeText(password),
      confirmSound.play(),
      setpasswordCopiedAnimation(true),
      setTimeout(() => {
        setpasswordCopiedAnimation(false);
      }, 1000)
    );
  };

  const animation = passwordCopiedAnimation ? 'copied-animation' : '';
  return (
    <button className={`button ${animation}`} onClick={copyToClipBoard}>
      <FaCopy size={22} /> <span>Copy</span>
    </button>
  );
};

export default CopyButton;
