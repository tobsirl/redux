import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement } from './redux';
import './App.css';

function App() {
  const count = useSelector((state) => state);
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
