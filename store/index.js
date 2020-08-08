// Actions
return {
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  },
};

return {
  type: 'REMOVE_TODO',
  id: 0,
};

return {
  type: 'TOGGLE_TODO',
  id: 0,
};

return {
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon',
  },
};

return {
  type: 'REMOVE_GOAL',
  id: 0,
};

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case 'ADD_GOAL':
      return state.concat([action.goal]);
    case 'REMOVE_GOAL':
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}

/*
  Characteristics of a Pure Function
  1) They always return the same result if the same agruments are passed in.
  2) They depend only on the arguments passed into them.
  3) Never produce any side effects. 
*/

function createStore(reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    // call todos
    state = reducer(state, action);
    // loop over listeners and invoke them
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const store = createStore();

store.getState();

const unsubsribe = store.subscribe(() => {
  console.log(`The new state is: `, store.getState());
});

store.dispatch({
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  },
});

store.getState();
