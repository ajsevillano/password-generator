//Context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const Input = () => {
  const { passwordState } = useContext(GlobalContext);
  const { password } = passwordState;

  return <input type="text" defaultValue={password} readOnly />;
};

export default Input;
