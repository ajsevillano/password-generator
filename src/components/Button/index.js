const Button = ({ handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      Generate Password
    </button>
  );
};

export default Button;
