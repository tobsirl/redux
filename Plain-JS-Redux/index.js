const redux = require('redux');

const initialState = {
  count: 0,
  favouriteThing: [],
  youtubeVideo: {
    title: '',
    votecount: 0,
    votes: {
      up: 0,
      down: 0,
    },
  },
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

function setYoutubeTitle(title) {
  return {
    type: 'SET_YOUTUBE_TITLE',
    payload: title,
  };
}

function incrementVoteCount() {
  return {
    type: 'INCREMENT_VOTE_COUNT',
  };
}

function upVote() {
  return {
    type: 'UP_VOTE',
  };
}

function downVote() {
  return {
    type: 'DOWN_VOTE',
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
    case 'SET_YOUTUBE_TITLE':
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          title: action.payload,
        },
      };
    case 'INCREMENT_VOTE_COUNT':
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votecount: state.youtubeVideo.votecount + 1,
        },
      };
    case 'UP_VOTE':
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            up: state.youtubeVideo.votes.up + 1,
          },
        },
      };
    case 'DOWN_VOTE':
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            down: state.youtubeVideo.votes.down + 1,
          },
        },
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setYoutubeTitle('Boris'));
store.dispatch(incrementVoteCount());
store.dispatch(upVote());
store.dispatch(downVote());
