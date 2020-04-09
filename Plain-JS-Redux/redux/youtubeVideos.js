const initialState = {
  title: '',
  votecount: 0,
  votes: {
    up: 0,
    down: 0,
  },
};

export function setYoutubeTitle(title) {
  return {
    type: 'SET_YOUTUBE_TITLE',
    payload: title,
  };
}

export function incrementVoteCount() {
  return {
    type: 'INCREMENT_VOTE_COUNT',
  };
}

export function upVote() {
  return {
    type: 'UP_VOTE',
  };
}

export function downVote() {
  return {
    type: 'DOWN_VOTE',
  };
}

export default function youtubeVideoReducer(youtubeVideo = initialState, action) {
  switch (action.type) {
    case 'SET_YOUTUBE_TITLE':
      return {
        ...youtubeVideo,
        title: action.payload,
      };
    case 'INCREMENT_VOTE_COUNT':
      return {
        ...youtubeVideo,
        votecount: youtubeVideo.votecount + 1,
      };
    case 'UP_VOTE':
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          up: youtubeVideo.votes.up + 1,
        },
      };
    case 'DOWN_VOTE':
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes,
          down: youtubeVideo.votes.down + 1,
        },
      };
    default:
      return youtubeVideo;
  }
}
