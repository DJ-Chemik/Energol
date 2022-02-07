import React from 'react';
import Calculator from '../Calculator/Calculator';
import ReactLogo from '../UI/ReactLogo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
