import { UserActionType } from '../action-types';
import IUserFavoriteItem from '../state-interfaces/User/IUserFavoriteItem';
import IUserInfo from '../state-interfaces/User/IUserInfo';

interface LogInUserAction {
  type: UserActionType.USER_LOGIN;
  payload: IUserInfo;
}

interface LogOutUserAction {
  type: UserActionType.USER_LOGOUT;
}

interface AddFavoriteMovieUserAction {
  type: UserActionType.USER_ADD_FAVORITE_MOVIE;
  payload: IUserFavoriteItem;
}

interface AddFavoriteMovieGroupUserAction {
  type: UserActionType.USER_ADD_FAVORITE_MOVIE_GROUP;
  payload: IUserFavoriteItem[];
}

interface DeleteFavoriteMovieUserAction {
  type: UserActionType.USER_DELETE_FAVORITE_MOVIE;
  payload: IUserFavoriteItem;
}

interface AddFavoriteTvShowUserAction {
  type: UserActionType.USER_ADD_FAVORITE_TV_SHOW;
  payload: IUserFavoriteItem;
}

interface AddFavoriteTvShowGroupUserAction {
  type: UserActionType.USER_ADD_FAVORITE_TV_SHOW_GROUP;
  payload: IUserFavoriteItem[];
}

interface DeleteFavoriteTvShowUserAction {
  type: UserActionType.USER_DELETE_FAVORITE_TV_SHOW;
  payload: IUserFavoriteItem;
}

interface DeleteAllFavorites {
  type: UserActionType.USER_DELETE_ALL_FAVORITES;
}

interface DefaultNothing {
  type: '';
}

type UserActions =
  | LogInUserAction
  | LogOutUserAction
  | AddFavoriteMovieUserAction
  | AddFavoriteMovieGroupUserAction
  | DeleteFavoriteMovieUserAction
  | AddFavoriteTvShowUserAction
  | AddFavoriteTvShowGroupUserAction
  | DeleteFavoriteTvShowUserAction
  | DeleteAllFavorites
  | DefaultNothing;

export default UserActions;
