import ILogin from './interfaces/ILogin';
import IMovieParams from './interfaces/IMovieParams';
import ISearchParams from './interfaces/ISearchParams';
import IShowParams from './interfaces/IShowParams';

export const DEBOUNCE_TIME_MS = 500;
export const MIN_RELEASE_YEAR = 1952;
export const MAX_RELEASE_YEAR = 2023;

export const TMDB_URL = new URL('https://api.themoviedb.org/3/');

export const initialMovieParams: IMovieParams = {
  certification: '',
  genre: '',
  primaryReleaseYear: '',
  page: 1,
};

export const initialTVShowsParams: IShowParams = {
  primaryReleaseYear: '',
  genre: '',
  page: 1,
};

export const initialSearchParams: ISearchParams = {
  search: '',
  page: 1,
};

export const PAGES_PER_VIEW = 10;

export const ITEMS_DISCOVER_PER_PAGE = 19;

export const ITEMS_PER_PAGE = 5;

export const EPISODES_PER_PAGE = 10;

export const errorMessageLogin = 'Please only introduce alphanumerical values';

export const initialLogin: ILogin = {
  id: '',
  password: '',
  userName: '',
};
