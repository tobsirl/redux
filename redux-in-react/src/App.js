import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux';
import './App.css';

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default App;
