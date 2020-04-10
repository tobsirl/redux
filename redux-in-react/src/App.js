import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux in React</h1>
    </div>
  );
}

export default connect(/* What parts of state do you want? , What actions to dispatch */)(App);
