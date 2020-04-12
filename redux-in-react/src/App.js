import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button className="btn">+</button>
      <button className="btn">-</button>
    </div>
  );
}

function mapStateToProps(state) {
  // return an object where the keys are the name of the prop your component wants
  // values are the actual parts of the global state your component wants
  return {
    count: state,
  };
}

export default connect(mapStateToProps, {})(App);
