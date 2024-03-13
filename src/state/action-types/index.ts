export enum UserActionType {
  USER_LOGIN = 'user/logIn',
  USER_LOGOUT = 'user/logOut',
  USER_ADD_FAVORITE_MOVIE = 'user/addFavoriteMovie',
  USER_DELETE_FAVORITE_MOVIE = 'user/deleteFavoriteMovie',
  USER_ADD_FAVORITE_MOVIE_GROUP = 'user/addFavoriteMovieGroup',
  USER_ADD_FAVORITE_TV_SHOW = 'user/addFavoriteTvShow',
  USER_ADD_FAVORITE_TV_SHOW_GROUP = 'user/addFavoriteTvShowGroup',
  USER_DELETE_FAVORITE_TV_SHOW = 'user/deleteFavoriteTvShow',
  USER_DELETE_ALL_FAVORITES = 'user/deleteAllFavorites',
}

export enum TVShowActionType {
  SET_NAME = 'tvShow/setName',
  UNSET_NAME = 'tvShow/unsetName',
}
