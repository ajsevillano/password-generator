const Checkbox = ({ name, id, onChange, label, isChecked }) => {
  return (
    <div className="input-group">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
      />
      <label for={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
