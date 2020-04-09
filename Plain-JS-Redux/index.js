const redux = require('redux');

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

