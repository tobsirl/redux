import store from './redux';
import { change_count } from './redux/count';
import { addFavoriteThing, removeFavoriteThing } from './redux/favoriteThings';
import {
  setYoutubeTitle,
  incrementVoteCount,
  upVote,
  downVote,
} from './redux/youtubeVideos';

// count
store.dispatch(change_count(5));

// favoriteThings
store.dispatch(addFavoriteThing('Love'));
store.dispatch(addFavoriteThing('is'));
store.dispatch(addFavoriteThing('Dead'));
store.dispatch(removeFavoriteThing('Dead'));


// youtube
store.dispatch(setYoutubeTitle('Parasite'));
store.dispatch(incrementVoteCount());
store.dispatch(upVote());
store.dispatch(downVote());
