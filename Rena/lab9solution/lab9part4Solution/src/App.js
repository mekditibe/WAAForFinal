import React, { useState } from 'react';
import { Counter } from './pages/Counter';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = (value) => {
    setCounter(counter + value);
  }

  const decrement = (value) => {
    setCounter(counter - value);
  }

  return (
    <table>
      <tr>
        <th><h3>{counter}</h3></th>
      </tr>
      <tr>
        <td><Counter value={1} incFunction={increment} decFunction={decrement} counter={counter}/></td>
        <td><Counter value={3} incFunction={increment} decFunction={decrement} counter={counter}/></td>
      </tr>
      <tr>
        <td><Counter value={5} incFunction={increment} decFunction={decrement} counter={counter}/></td>
        <td><Counter value={8} incFunction={increment} decFunction={decrement} counter={counter}/></td>
      </tr>
    </table>
  );
}

export default App;
