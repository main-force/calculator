import React from 'react';
import Calculator from './components/Calculator';
import { useSelector } from 'react-redux';

function App() {
  const result = useSelector((state) => state.calculator.value);

  return (
    <div className="App">
      <Calculator />
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
