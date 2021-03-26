import './App.css';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';
import Button from './components/Button/index';

function App() {
  return (
    <Layout>
      <h1>Password Generator</h1>
      <div className="input-container">
        <Input />
        <Button />
      </div>
    </Layout>
  );
}

export default App;
