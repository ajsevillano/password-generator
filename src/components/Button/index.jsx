import { FaCopy } from 'react-icons/fa';

const Button = ({ copyToClipBoard, passwordCopied }) => {
  const animation = passwordCopied ? 'copied-animation' : '';
  return (
    <button className={`button ${animation}`} onClick={copyToClipBoard}>
      <FaCopy size={22} /> <span>Copy</span>
    </button>
  );
};

export default Button;
