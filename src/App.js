import './App.css';

import Layout from './components/Layout/Index';
import Input from './components/Input/Index';

function App() {
  return (
    <Layout>
      <h1>Password Generator</h1>
      <div className="input-container">
        <Input />
        <button>Generate</button>
      </div>
    </Layout>
  );
}

export default App;
