import {FETCH_FEEDS_COMMIT, FETCH_FEEDS, ADD_FEED} from '../actions';

export default function feeds(state = [], action: any) {
  switch (action.type) {
    case FETCH_FEEDS:
      return state;
    case FETCH_FEEDS_COMMIT:
      return [...action.payload];
    case ADD_FEED:
      return [...state, action.payload];
    default:
      return state;
  }
}