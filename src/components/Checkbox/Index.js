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
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;
