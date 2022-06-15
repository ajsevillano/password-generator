//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const SecureBar = () => {
  //Context
  const { passwordLengthState } = useContext(GlobalContext);
  const { passLength } = passwordLengthState;

  const passwordStrength = (colorParams) => {
    switch (true) {
      case passLength <= 3:
        return colorParams === 'secure-bar'
          ? 'very-weak-password'
          : 'very-weak-password-background';

      case passLength >= 4 && passLength <= 10:
        return colorParams === 'secure-bar'
          ? 'weak-password'
          : 'weak-password-background';

      case passLength >= 11 && passLength <= 15:
        return colorParams === 'secure-bar'
          ? 'medium-password'
          : 'medium-password-background';

      case passLength >= 16 && passLength <= 20:
        return colorParams === 'secure-bar'
          ? 'strong-password'
          : 'strong-password-background';

      case passLength >= 21 && passLength <= 30:
        return colorParams === 'secure-bar'
          ? 'very-strong-password'
          : 'very-strong-password-background';

      default:
        return '';
    }
  };

  return (
    <>
      <div className={`secure-bar ${passwordStrength('secure-bar')}`}></div>
      <div
        className={`secure-bar-background ${passwordStrength(
          'secure-bar-background'
        )}`}
      ></div>
    </>
  );
};

export default SecureBar;
