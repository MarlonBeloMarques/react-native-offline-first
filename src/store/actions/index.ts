export const FETCH_FEEDS = 'FETCH_FEEDS';
export const FETCH_FEEDS_COMMIT = 'FETCH_FEEDS_COMMIT';
export const FETCH_FEEDS_ROLLBACK = 'FETCH_FEEDS_ROLLBACK';

export const ADD_FEED = 'ADD_FEED';
export const ADD_FEED_COMMIT = 'ADD_FEED_COMMIT';
export const ADD_FEED_ROLLBACK = 'ADD_FEED_ROLLBACK';

export const fetchFeeds = () => ({
  type: FETCH_FEEDS,
  payload: {},
  meta: {
    offline: {
      effect: {url: 'http://localhost:3000/feed', method: 'GET'},
      commit: {type: FETCH_FEEDS_COMMIT, meta: {}},
      rollback: {type: FETCH_FEEDS_ROLLBACK, meta: {}},
    },
  },
});

export const addFeed = (id: Number, description: String, price: String, authorId: Number) => ({
  type: ADD_FEED,
  payload: {id, description, price, authorId},
  meta: {
    offline: {
      effect: {
        url: 'http://localhost:3000/feed',
        method: 'POST',
        json: {id, description, price, authorId},
      },
      commit: {type: ADD_FEED_COMMIT, meta: {id, description, price, authorId}},
      rollback: {type: ADD_FEED_ROLLBACK, meta: {id, description, price, authorId}},
    },
  },
});