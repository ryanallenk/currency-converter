import React from 'react';
import './App.css';
import InputForm from './Components/InputForm';
import OutputForm from './Components/OutputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
      </header>
      <InputForm/>
      <OutputForm/>
    </div>
  );
}

export default App;
