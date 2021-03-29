const Input = ({ value, Theref }) => {
  return <input type="text" ref={Theref} defaultValue={value} />;
};

export default Input;
