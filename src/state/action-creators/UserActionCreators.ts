import { UserActionType } from '../action-types';
import IUserFavoriteItem from '../state-interfaces/User/IUserFavoriteItem';
import IUserInfo from '../state-interfaces/User/IUserInfo';

export const userLogIn = (user: IUserInfo) => ({
  type: UserActionType.USER_LOGIN,
  payload: user,
});

export const userLogOut = () => ({
  type: UserActionType.USER_LOGOUT,
});

export const userAddFavoriteMovie = (movie : IUserFavoriteItem) => ({
  type: UserActionType.USER_ADD_FAVORITE_MOVIE,
  payload: movie,
});

export const userAddFavoriteMovieGroup = (movies : IUserFavoriteItem[]) => ({
  type: UserActionType.USER_ADD_FAVORITE_MOVIE_GROUP,
  payload: movies,
});

export const userDeleteFavoriteMovie = (movie: IUserFavoriteItem) => ({
  type: UserActionType.USER_DELETE_FAVORITE_MOVIE,
  payload: movie,
});

export const userAddFavoriteTvShow = (tvShow: IUserFavoriteItem) => ({
  type: UserActionType.USER_ADD_FAVORITE_TV_SHOW,
  payload: tvShow,
});

export const userAddFavoriteTvShowGroup = (tvShows : IUserFavoriteItem[]) => ({
  type: UserActionType.USER_ADD_FAVORITE_TV_SHOW_GROUP,
  payload: tvShows,
});

export const userDeleteFavoriteTvShow = (tvShow: IUserFavoriteItem) => ({
  type: UserActionType.USER_DELETE_FAVORITE_TV_SHOW,
  payload: tvShow,
});

export const userDeleteAllFavorites = () => ({
  type: UserActionType.USER_DELETE_ALL_FAVORITES,
});
