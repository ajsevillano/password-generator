//Icons
import { FaSync } from 'react-icons/fa';
import { generatePassword } from '../../utils/helpers';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const RefreshButton = () => {
  const { loadingState, passwordState, passwordLengthState, checkBoxesState } =
    useContext(GlobalContext);
  const { loading, setLoading } = loadingState;
  const { setPassword } = passwordState;
  const { passLength } = passwordLengthState;
  const { checkBoxes } = checkBoxesState;

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
    <button
      data-testid="refreshbutton"
      className="sync-container"
      onClick={handleClick}
    >
      <FaSync
        data-testid="icon"
        size={30}
        className={!loading ? '' : 'sync-animation'}
      />
    </button>
  );
};

export default RefreshButton;
