//Icons
import { FaSync } from 'react-icons/fa';
import { generatePassword } from '../../utils/helpers';

//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

//Interfaces
interface PasswordState {
  password: string;
  setPassword: (targetValue: string) => void;
}

interface LoadingState {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PasswordLengthState {
  passLength: number;
  setPassLength: (targetValue: number) => void;
}

interface CheckBoxesState {
  checkBoxes: Array<CheckBoxesArray>;
  setCheckBoxes: (targetValue: []) => void;
}

interface CheckBoxesArray {
  id: number;
  isChecked: boolean;
  label: string;
  labelMobile: string;
  name: string;
}

interface ContextTypes {
  passwordState: PasswordState;
  passwordLengthState: PasswordLengthState;
  checkBoxesState: CheckBoxesState;
  loadingState: LoadingState;
}

const RefreshButton = () => {
  const {
    loadingState,
    passwordState,
    passwordLengthState,
    checkBoxesState,
  }: ContextTypes = useContext(GlobalContext);
  const { loading, setLoading }: ContextTypes['loadingState'] = loadingState;
  const { setPassword }: ContextTypes['passwordState'] = passwordState;
  const { passLength }: ContextTypes['passwordLengthState'] =
    passwordLengthState;
  const { checkBoxes }: CheckBoxesState = checkBoxesState;

  //Generate Password Button
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
