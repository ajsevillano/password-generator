const Checkbox = ({ name, onChange, label, isChecked, filters }) => {
  const handleDisabled = () => {
    const disallowEmptyCheckBox = Object.values(filters).filter(
      (value) => value
    ).length;

    return disallowEmptyCheckBox === 1 && isChecked;
  };

  return (
    <div className="input-group">
      <input
        id={name}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
        disabled={handleDisabled()}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
