//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const Checkbox = ({
  name,
  setCheckBoxes,
  label,
  labelMobile,
  isChecked,
  filters,
  updateCheckBox,
}) => {
  const { loadingState } = useContext(GlobalContext);
  const { setLoading } = loadingState;

  // at least 1 checkbox MUST be checked all the time
  const handleDisabled = () => {
    const disallowEmptyCheckBox = filters.filter((value) => value).length;
    return disallowEmptyCheckBox === 1 && isChecked;
  };

  //Checkboxes Handler
  const handleCheckBox = (e) => {
    setLoading(true);
    setCheckBoxes(updateCheckBox(e));
    setTimeout(() => {
      setLoading(false);
    }, 450);
  };

  return (
    <>
      <input
        className="input-checkbox"
        id={name}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={handleCheckBox}
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
