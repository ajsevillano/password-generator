import { FaCopy } from 'react-icons/fa';
import React, { useState } from 'react';

//Sounds
import Confirm from '../../assets/confirm.wav';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const CopyButton = () => {
  const [passwordCopiedAnimation, setpasswordCopiedAnimation] = useState(false);
  //Context
  const { passwordState } = useContext(GlobalContext);
  const { password } = passwordState;

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
