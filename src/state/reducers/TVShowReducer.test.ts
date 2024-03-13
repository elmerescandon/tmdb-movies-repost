import ITVShowState from '../state-interfaces/TVShow/ITVShowState';
import { tvShowSetTitle, tvShowUnsetTitle } from '../action-creators/TVShowActionCreators';
import TVShowReducer from './TVShowReducer';
import TVShowActions from '../actions/TVShowActions';

describe('Test user reducer', () => {
  it('Should set title name', () => {
    const initialState: ITVShowState = { name: '' };
    const tvShowAction = tvShowSetTitle('New TV Show');
    const newState = TVShowReducer(
      initialState,
      tvShowAction as TVShowActions,
    );
    expect(newState).not.toStrictEqual(initialState);
    expect(newState.name).toBe('New TV Show');
  });

  it('Should unset title name', () => {
    const initialState: ITVShowState = { name: 'Old tv show' };
    const tvUnsetShowAction = tvShowUnsetTitle();
    const newState = TVShowReducer(
      initialState,
      tvUnsetShowAction as TVShowActions,
    );
    expect(newState).not.toStrictEqual(initialState);
    expect(newState.name).toBe('');
  });
});

export {};
