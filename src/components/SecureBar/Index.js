const SecureBar = ({ passLength }) => {
  const PasswordStrength = () => {
    switch (true) {
      case passLength <= 3:
        return 'very-weak-password';

      case passLength >= 4 && passLength <= 10:
        return 'weak-password';

      case passLength >= 11 && passLength <= 15:
        return 'medium-password';

      case passLength >= 16 && passLength <= 20:
        return 'strong-password';

      case passLength >= 21 && passLength <= 30:
        return 'very-strong-password';

      default:
        return '';
    }
  };

  return <div className={`secure-bar ${PasswordStrength()}`}></div>;
};

export default SecureBar;
