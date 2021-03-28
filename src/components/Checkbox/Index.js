const Checkbox = ({ name, id, onChange, isLowerCase, label, isChecked }) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
        // islowercase={{ isLowerCase }}
      />
      <span>{label}</span>
    </>
  );
};

export default Checkbox;
