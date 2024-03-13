import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import TVShowReducer from './TVShowReducer';

const reducers = combineReducers({
  user: UserReducer,
  tvShow: TVShowReducer,
});
export default reducers;
