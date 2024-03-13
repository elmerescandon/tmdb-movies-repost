import IUserInfo from '../state-interfaces/User/IUserInfo';
import IUserState from '../state-interfaces/User/IUserState';
import UserReducer, {
  initialUserFavorites,
  initialUserState,
} from './UserReducer';
import {
  userAddFavoriteMovie,
  userAddFavoriteTvShow,
  userDeleteFavoriteMovie,
  userDeleteFavoriteTvShow,
  userLogIn,
  userLogOut,
} from '../action-creators/UserActionCreators';
import UserActions from '../actions/UserActions';

describe('Test user reducer', () => {
  it('Should login user', () => {
    const newUser: IUserInfo = {
      id: '123',
      name: 'Raul',
      userName: 'raul.estu',
      sessionId: 'abc',
    };
    const userLoginAction = userLogIn(newUser);
    const nextUserState: IUserState = {
      favorites: initialUserFavorites,
      logged: true,
      userInfo: {
        id: '123',
        name: 'Raul',
        userName: 'raul.estu',
        sessionId: 'abc',
      },
    };
    const desiredState = UserReducer(
      initialUserState,
      userLoginAction as UserActions,
    );
    expect(nextUserState).toStrictEqual(desiredState);
  });

  it('Should logout user', () => {
    const userLogOutAction = userLogOut();
    const initialState: IUserState = {
      favorites: initialUserFavorites,
      logged: true,
      userInfo: {
        id: '123',
        name: 'Raul',
        userName: 'raul.estu',
        sessionId: 'abc',
      },
    };
    const desiredState = UserReducer(
      initialState,
      userLogOutAction as UserActions,
    );
    expect(desiredState).not.toStrictEqual(initialState);
    expect(desiredState.userInfo).toBe(null);
    expect(desiredState.logged).toBe(false);
  });

  it('Should add movie to favorites', () => {
    const addFavoriteMovie = userAddFavoriteMovie({
      backdropPath: '/',
      id: 100,
      title: 'Movie',
    });
    const initialState: IUserState = {
      favorites: initialUserFavorites,
      logged: true,
      userInfo: null,
    };
    const desiredState = UserReducer(
      initialState,
      addFavoriteMovie as UserActions,
    );
    expect(desiredState.favorites.movies.length).toBe(1);
    expect(desiredState.favorites.movies[0].id).toBe(100);
  });

  it('Should remove movie from favorites', () => {
    const itemFavorite = {
      backdropPath: '/',
      id: 100,
      title: 'Movie',
    };
    const deleteFavoriteMovie = userDeleteFavoriteMovie(itemFavorite);
    const initialState: IUserState = {
      favorites: { tvShows: [], movies: [itemFavorite] },
      logged: true,
      userInfo: null,
    };
    const desiredState = UserReducer(
      initialState,
      deleteFavoriteMovie as UserActions,
    );
    expect(desiredState.favorites.movies.length).toBe(0);
  });

  it('Should add tv show to favorites', () => {
    const addFavoriteTV = userAddFavoriteTvShow({
      backdropPath: '/',
      id: 10,
      title: 'TV sHOW',
    });
    const initialState: IUserState = {
      favorites: initialUserFavorites,
      logged: true,
      userInfo: null,
    };
    const desiredState = UserReducer(
      initialState,
      addFavoriteTV as UserActions,
    );
    expect(desiredState.favorites.tvShows.length).toBe(1);
    expect(desiredState.favorites.tvShows[0].id).toBe(10);
  });

  it('Should remove tv show from favorites', () => {
    const itemFavorite = {
      backdropPath: '/',
      id: 10,
      title: 'TV Show',
    };
    const deleteFavoriteTV = userDeleteFavoriteTvShow(itemFavorite);
    const initialState: IUserState = {
      favorites: { tvShows: [itemFavorite], movies: [] },
      logged: true,
      userInfo: null,
    };
    const desiredState = UserReducer(
      initialState,
      deleteFavoriteTV as UserActions,
    );
    expect(desiredState.favorites.tvShows.length).toBe(0);
  });
});

export {};
