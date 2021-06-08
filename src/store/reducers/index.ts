import {combineReducers} from 'redux';
import feeds from './feeds';

const feedsApp = combineReducers({
  feeds,
});

export default feedsApp;