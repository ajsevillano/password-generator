const Input = ({ value, Theref }) => {
  return (
    <input type="text" ref={Theref} defaultValue={value} disabled="disabled" />
  );
};

export default Input;
