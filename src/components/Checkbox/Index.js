const Checkbox = ({ name, id, onChange, label, isChecked }) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
      />
      <span>{label}</span>
    </>
  );
};

export default Checkbox;
