import React, {useState} from 'react';

export const Counter = ({value, incFunction, decFunction, counter}) => {
  
  const increment = () => {
    incFunction(value);
  }

  const decrement = () => {
    decFunction(value);
  }

  let component = (
      <table>
        <tr>
          <th><h3>{counter}</h3></th>
        </tr>
        <tr>
          <td><button onClick={increment} >+ {value}</button></td>
          <td><button onClick={decrement} >- {value}</button></td>
        </tr>
      </table>
  );
  return component;
}