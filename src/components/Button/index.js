import { FaCopy } from 'react-icons/fa';

const Button = ({ handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      <FaCopy size={22} /> <span>Copy</span>
    </button>
  );
};

export default Button;
