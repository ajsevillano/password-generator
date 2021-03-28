const Checkbox = ({ type, name, id, onChange, isLowerCase, label }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        islowercase={{ isLowerCase }}
      />
      <span>{label}</span>
    </>
  );
};

export default Checkbox;
