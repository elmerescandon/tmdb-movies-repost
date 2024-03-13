import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';
import store from '../../../state/store';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';
import { userLogIn } from '../../../state/action-creators/UserActionCreators';
import IUserInfo from '../../../state/state-interfaces/User/IUserInfo';
import UserActions from '../../../state/actions/UserActions';
import MenuTVShow from './MenuTVShow';
import mockServer from '../../../utils/testing/mockServer';

describe('Menu movie testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should add to favorites', () => {
    const initialTVShowItem: IUserFavoriteItem = {
      backdropPath: '/',
      id: 456,
      title: 'TV Show',
    };
    const userLoginState: IUserInfo = {
      id: '123',
      name: 'raul',
      userName: 'raulo.estu',
      sessionId: '123',
    };
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MenuTVShow tvShowItem={initialTVShowItem} />
        </BrowserRouter>
      </Provider>,
    );
    act(() => {
      store.dispatch(userLogIn(userLoginState) as UserActions);
    });
    fireEvent.click(getByText('Add'));
    expect(store.getState().user.favorites.tvShows.length).toBe(1);
    fireEvent.click(getByText('Remove'));
    expect(store.getState().user.favorites.tvShows.length).toBe(0);
  });
});
