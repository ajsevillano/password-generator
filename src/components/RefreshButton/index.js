//Icons
import { FaSync } from 'react-icons/fa';
import { generatePassword } from '../../utils/helpers';

const RefreshButton = ({
  loading,
  setLoading,
  setPassword,
  checkBoxes,
  passLength,
}) => {
  //Generate Password Button
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setPassword(generatePassword(checkBoxes, passLength));
    }, 200);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="sync-container" onClick={handleClick}>
      <FaSync size={30} className={!loading ? '' : 'sync-animation'} />
    </div>
  );
};

export default RefreshButton;
