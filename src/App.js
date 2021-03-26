import './App.css';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

import { FcLock } from 'react-icons/fc';

function App() {
  return (
    <Layout>
      <h1>Password Generator</h1>
      <p> Generate a secure password to use on your daily basics!</p>
      <div className="input-container">
        <FcLock />
        <Input />
        <Button />
      </div>
    </Layout>
  );
}

export default App;
