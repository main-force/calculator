import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, subtract, multiply, divide } from '../features/calculatorSlice';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const dispatch = useDispatch();

  const handleCalculate = (operation) => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    switch (operation) {
      case '+':
        dispatch(add({ num1, num2 }));
        break;
      case '-':
        dispatch(subtract({ num1, num2 }));
        break;
      case '*':
        dispatch(multiply({ num1, num2 }));
        break;
      case '/':
        dispatch(divide({ num1, num2 }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <button onClick={() => handleCalculate('+')}>+</button>
      <button onClick={() => handleCalculate('-')}>-</button>
      <button onClick={() => handleCalculate('*')}>*</button>
      <button onClick={() => handleCalculate('/')}>/</button>
    </div>
  );
}

export default Calculator;
