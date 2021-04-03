const Checkbox = ({
  name,
  onChange,
  label,
  labelMobile,
  isChecked,
  filters,
}) => {
  const handleDisabled = () => {
    const disallowEmptyCheckBox = Object.values(filters).filter(
      (value) => value
    ).length;

    return disallowEmptyCheckBox === 1 && isChecked;
  };

  return (
    <>
      <input
        className="input-checkbox"
        id={name}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
        disabled={handleDisabled()}
      />

      <label className="label-input-checkbox" htmlFor={name}>
        <span className="check-box">
          <svg width="12px" height="10px">
            <use href="#check"></use>
          </svg>
        </span>
        <span className="check-box-label">{label}</span>
        <span className="label-mobile">{labelMobile}</span>
      </label>
    </>
  );
};

export default Checkbox;
