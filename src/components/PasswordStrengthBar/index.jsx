//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const PasswordStrengthBar = () => {
  //Context
  const { passwordLengthState } = useContext(GlobalContext);
  const { passLength } = passwordLengthState;

  const passwordStrengthValues = [
    { min: 0, max: 3, name: 'veryWeak' },
    { min: 4, max: 10, name: 'weak' },
    { min: 11, max: 15, name: 'medium' },
    { min: 16, max: 20, name: 'strong' },
    { min: 21, max: 30, name: 'veryStrong' },
  ];

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
