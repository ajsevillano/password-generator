//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

//Data
import { passwordStrengthValues } from '../../data/passwordStrengthValues';

const PasswordStrengthBar = () => {
  //Context
  const { passwordLengthState } = useContext(GlobalContext);
  const { passLength } = passwordLengthState;

  const getPasswordStrength = () => {
    const filterValue = passwordStrengthValues.filter(
      (element) => passLength >= element.min && passLength <= element.max
    );
    return filterValue[0].name;
  };

  return (
    <>
      <div className={`secure-bar ${getPasswordStrength()}`}></div>
      <div className={`secure-bar-background ${getPasswordStrength()}`}></div>
    </>
  );
};

export default PasswordStrengthBar;
