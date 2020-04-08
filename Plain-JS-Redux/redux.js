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

function double() {
  return {
    type: 'DOUBLE',
  };
}

function halve() {
  return {
    type: 'HALVE',
  };
}

function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'DOUBLE':
      return {
        count: state.count * 2,
      };
    case 'HALVE':
      return {
        count: Math.round(state.count / 2),
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);

console.log(increment());
