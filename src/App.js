import './App.css';

import Layout from './components/Layout/Index';

function App() {
  return (
    <Layout>
      <h1>Password Generator</h1>
      <div className="input-container">
        <input type="text" />
        <button>Generate</button>
      </div>
    </Layout>
  );
}

export default App;
