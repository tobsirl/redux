const redux = require('redux');
const { combineReducers, createStore } = redux;

// import the seperate reducers
import countReducer from './count';
import favoriteThingsReducer from './favoriteThings';
import youtubeVideoReducer from './youtubeVideos';

// combine the reducers into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youtubeVideo: youtubeVideoReducer,
});

// create the store
// export the store
