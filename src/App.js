import './App.css';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

import { FcLock } from 'react-icons/fc';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    const randomLowerCaseLetter =
      Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    const lowerCaseLetter = String.fromCharCode(randomLowerCaseLetter);
    console.log(lowerCaseLetter);
  };
  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock size={35} className={'lock-icon'} />
        <Input />
        <Button handleClick={handleClick} />
      </div>
    </Layout>
  );
}

export default App;
