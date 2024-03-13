/* eslint-disable @typescript-eslint/default-param-last */
import IUserFavorites from '../state-interfaces/User/IUserFavorites';
import IUserState from '../state-interfaces/User/IUserState';
import UserActions from '../actions/UserActions';
import { UserActionType } from '../action-types';

export const initialUserFavorites: IUserFavorites = {
  movies: [],
  tvShows: [],
};

export const initialUserState: IUserState = {
  logged: false,
  userInfo: null,
  favorites: initialUserFavorites,
};

const UserReducer = (
  state: IUserState = initialUserState,
  action: UserActions,
) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN:
      return { ...state, logged: true, userInfo: action.payload };
    case UserActionType.USER_LOGOUT:
      return {
        ...state,
        logged: false,
        userInfo: null,
        favorites: initialUserFavorites,
      };

    case UserActionType.USER_ADD_FAVORITE_MOVIE: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          movies: [...state.favorites.movies, action.payload],
        },
      };
    }

    case UserActionType.USER_ADD_FAVORITE_MOVIE_GROUP: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          movies: [...state.favorites.movies.concat(action.payload)],
        },
      };
    }

    case UserActionType.USER_DELETE_FAVORITE_MOVIE: {
      const newMovieFavorites = state.favorites.movies.filter(
        (movie) => movie.id !== action.payload.id,
      );
      return {
        ...state,
        favorites: { ...state.favorites, movies: newMovieFavorites },
      };
    }

    case UserActionType.USER_ADD_FAVORITE_TV_SHOW: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          tvShows: [...state.favorites.tvShows, action.payload],
        },
      };
    }
    case UserActionType.USER_ADD_FAVORITE_TV_SHOW_GROUP: {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          tvShows: [...state.favorites.tvShows.concat(action.payload)],
        },
      };
    }
    case UserActionType.USER_DELETE_FAVORITE_TV_SHOW: {
      const newTVShowsFavorites = state.favorites.tvShows.filter(
        (tvShow) => tvShow.id !== action.payload.id,
      );
      return {
        ...state,
        favorites: { ...state.favorites, tvShows: newTVShowsFavorites },
      };
    }

    case UserActionType.USER_DELETE_ALL_FAVORITES: {
      return {
        ...state,
        favorites: { movies: [], tvShows: [] },
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
