import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getMainCommonComponent } from './utils/cacheComponent';

function App() {
  const {
    Test1
  } = getMainCommonComponent()

  console.log('Test1->',Test1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {Test1 && <Test1 text='it is micro-react' />}
      </header>
    </div>
  );
}

export default App;
