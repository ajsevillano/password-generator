import { FaSync } from 'react-icons/fa';

const Button = ({ handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      <FaSync size={15} /> Generate Password
    </button>
  );
};

export default Button;
