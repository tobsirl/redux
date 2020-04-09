// require redux
const redux = require('redux');

const initialState = {
  count: 0,
  names: [],
};

// actions
function changeAmount(amount) {
  return {
    type: 'CHANGE_AMOUNT',
    payload: amount,
  };
}

function addName(name) {
  return {
    type: 'ADD_NAME',
    payload: name,
  };
}

function removeName(name) {
  return {
    type: 'REMOVE_NAME',
    payload: name,
  };
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_AMOUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'ADD_NAME':
      return {
        ...state,
        names: [...state.names, action.payload],
      };
    case 'REMOVE_NAME':
      return {
        ...state,
        names: state.names.filter((name) => action.payload !== name),
      };
    default:
      return state;
  }
}

// create the store
const store = redux.createStore(reducer);

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(changeAmount(5));
store.dispatch(changeAmount(5));
store.dispatch(addName('Paul'));
store.dispatch(addName('Keith'));
store.dispatch(removeName('Paul'))
