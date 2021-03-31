const Checkbox = ({ name, id, onChange, label, isChecked }) => {
  return (
    <div className="input-group">
      <input
        id={name}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
