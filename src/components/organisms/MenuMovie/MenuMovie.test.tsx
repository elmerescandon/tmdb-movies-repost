import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';
import store from '../../../state/store';
import MenuMovie from './MenuMovie';
import IUserFavoriteItem from '../../../state/state-interfaces/User/IUserFavoriteItem';
import { userLogIn } from '../../../state/action-creators/UserActionCreators';
import IUserInfo from '../../../state/state-interfaces/User/IUserInfo';
import UserActions from '../../../state/actions/UserActions';
import mockServer from '../../../utils/testing/mockServer';

describe('Menu movie testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should add to favorites', () => {
    const initialMovieItem: IUserFavoriteItem = {
      backdropPath: '/',
      id: 123,
      title: 'Movie',
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
          <MenuMovie movieItem={initialMovieItem} />
        </BrowserRouter>
      </Provider>,
    );
    act(() => {
      store.dispatch(userLogIn(userLoginState) as UserActions);
    });
    fireEvent.click(getByText('Add'));
    expect(store.getState().user.favorites.movies.length).toBe(1);
    fireEvent.click(getByText('Remove'));
    expect(store.getState().user.favorites.movies.length).toBe(0);
  });
});
