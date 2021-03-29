import { FaCopy } from 'react-icons/fa';

const Button = ({ copyToClipBoard }) => {
  return (
    <button className="button" onClick={copyToClipBoard}>
      <FaCopy size={22} /> <span>Copy</span>
    </button>
  );
};

export default Button;
