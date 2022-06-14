const Input = ({ inputRef, value }) => {
  return <input type="text" ref={inputRef} defaultValue={value} readOnly />;
};

export default Input;
