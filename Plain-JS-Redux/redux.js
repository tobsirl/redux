const redux = require('redux');

const initialState = {
  count: 0,
  favouriteThing: [],
};

function change_count(amount) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount,
  };
}

function addFavoriteThing(thing) {
  return {
    type: 'ADD_FAVORITE_THING',
    payload: thing,
  };
}

function removeFavoriteThing(thing) {
  return {
    type: 'REMOVE_FAVORITE_THING',
    payload: thing,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'ADD_FAVORITE_THING':
      return {
        ...state,
        favouriteThing: [...state.favouriteThing, action.payload],
      };
    case 'REMOVE_FAVORITE_THING':
      const updatedArray = state.favouriteThing.filter(
        (thing) => action.payload !== thing
      );
      return {
        ...state,
        favouriteThing: updatedArray,
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(change_count(-4));
store.dispatch(addFavoriteThing('This'));
store.dispatch(addFavoriteThing('is'));
store.dispatch(removeFavoriteThing('This'));
