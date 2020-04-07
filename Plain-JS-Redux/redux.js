const redux = require('redux');

function increment() {
  return {
    type: 'INCREMENT',
  };
}

function decrement() {
  return {
    type: 'DECREMENT',
  };
}

function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      count: state.count - 1,
    };
  }
}

const store = redux.createStore()


console.log(increment());

