/* eslint-disable @typescript-eslint/default-param-last */
import TVShowActions from '../actions/TVShowActions';
import ITVShowState from '../state-interfaces/TVShow/ITVShowState';
import { TVShowActionType } from '../action-types';

export const initialTVShowState: ITVShowState = { name: '' };

const TVShowReducer = (
  state: ITVShowState = initialTVShowState,
  action: TVShowActions,
) => {
  switch (action.type) {
    case TVShowActionType.SET_NAME:
      return { ...state, name: action.payload };
    case TVShowActionType.UNSET_NAME:
      return { ...state, name: '' };
    default:
      return state;
  }
};

export default TVShowReducer;
