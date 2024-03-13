import { TMDB_URL } from '../../utils/constants';
import ISeasonParams from '../../utils/interfaces/ISeasonParams';
import IDiscover from '../../utils/interfaces/TMDB/IDiscover';
import IMovie from '../../utils/interfaces/TMDB/IMovie';
import IPerson from '../../utils/interfaces/TMDB/IPerson';
import ISeason from '../../utils/interfaces/TMDB/ISeason';
import ITVShow from '../../utils/interfaces/TMDB/ITVShow';
import AxiosFetch from '../Axios/Axios.service';
import {
  addParamsToDiscoverMovies,
  addParamsToDiscoverTVShows,
  addParamsToDetailContent,
  addParamsToSearch,
  addParamsToSeason,
  addParamsToPerson,
  userInfoToPost,
  favoriteToBody,
  favoriteParams,
} from './TMDB.util';
import IGetRequest from '../../utils/interfaces/TMDB/IGetRequest';
import IRequestToken from '../../utils/interfaces/TMDB/IRequestSession';
import ILogin from '../../utils/interfaces/ILogin';
import IAccount from '../../utils/interfaces/TMDB/IAccount';
import IRequestResponse from '../../utils/interfaces/TMDB/IRequestResponse';
import IUserInfo from '../../state/state-interfaces/User/IUserInfo';
import IMarkFavorite from '../../utils/interfaces/IMarkFavorite';

class TMDBService {
  private static instance: TMDBService;

  PUBLIC_KEY: string;

  URL: URL;

  searchParams: URLSearchParams;

  static getInstance(): TMDBService {
    if (!TMDBService.instance) {
      TMDBService.instance = new TMDBService();
    }
    return TMDBService.instance;
  }

  constructor() {
    this.PUBLIC_KEY = process.env.REACT_APP_TMDB_ACCESS_KEY as string;
    this.searchParams = new URLSearchParams();
    this.URL = TMDB_URL;
    this.searchParams.append('api_key', this.PUBLIC_KEY);
  }

  discoverMovies = async (params: URLSearchParams) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToDiscoverMovies(URLParams, params);
    URLName.pathname = '3/discover/movie';
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<IDiscover>(URLName.toString());
  };

  discoverTVShows = async (params: URLSearchParams) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToDiscoverTVShows(URLParams, params);
    URLName.pathname = '3/discover/tv';
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<IDiscover>(URLName.toString());
  };

  searchContent = async (params: URLSearchParams) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToSearch(URLParams, params);
    URLName.pathname = '3/search/multi';
    URLName.search = URLParams.toString();
    if (params.has('_search')) return AxiosFetch.GETMethod<IDiscover>(URLName.toString());
    return Promise.resolve(undefined);
  };

  getMovie = async (id: string | undefined) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToDetailContent(URLParams);
    URLName.pathname = `3/movie/${id}`;
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<IMovie>(URLName.toString());
  };

  getShow = async (id: string | undefined) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToDetailContent(URLParams);
    URLName.pathname = `3/tv/${id}`;
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<ITVShow>(URLName.toString());
  };

  getSeason = async (params: ISeasonParams) => {
    const { showId, seasonId } = params;
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToSeason(URLParams);
    URLName.pathname = `3/tv/${showId}/season/${seasonId}`;
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<ISeason>(URLName.toString());
  };

  getPerson = async (id: string | undefined) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    addParamsToPerson(URLParams);
    URLName.pathname = `3/person/${id}`;
    URLName.search = URLParams.toString();
    return AxiosFetch.GETMethod<IPerson>(URLName.toString());
  };

  getRequestToken = async () => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLName.search = URLParams.toString();
    URLName.pathname = '3/authentication/token/new';
    return AxiosFetch.GETMethod<IGetRequest>(URLName.toString());
  };

  createSession = async (user: ILogin) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLName.search = URLParams.toString();
    URLName.pathname = '3/authentication/token/validate_with_login';
    const dataRequest = (await AxiosFetch.POSTMethod<IRequestToken>(
      URLName.toString(),
      userInfoToPost(user),
    )) as IRequestResponse;
    return this.createSessionId(dataRequest.requestToken);
  };

  createSessionId = async (requestToken: string) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLParams.append('request_token', requestToken);
    URLName.search = URLParams.toString();
    URLName.pathname = '3/authentication/session/new';
    return AxiosFetch.GETMethod(URLName.toString());
  };

  getAccountDetails = async (sessionId: string) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLParams.append('session_id', sessionId);
    URLName.search = URLParams.toString();
    URLName.pathname = '3/account';
    return AxiosFetch.GETMethod<IAccount>(URLName.toString());
  };

  markFavorite = async (
    favoriteItem: IMarkFavorite,
    user: IUserInfo,
  ) => {
    const { sessionId, id } = user;
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLParams.append('session_id', sessionId);
    URLName.search = URLParams.toString();
    URLName.pathname = `3/account/${id}/favorite`;
    const bodyFavorite = favoriteToBody(favoriteItem);
    return AxiosFetch.POSTMethod(URLName.toString(), bodyFavorite, 'application/json;charset=utf-8');
  };

  logoutSession = async (sessionId: string) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    URLName.search = URLParams.toString();
    URLName.pathname = '3/authentication/session';
    return AxiosFetch.DELETEMethod(URLName.toString(), { session_id: sessionId });
  };

  getFavoriteMovies = async (accountId: string, sessionId: string) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    favoriteParams(URLParams, sessionId);
    URLName.search = URLParams.toString();
    URLName.pathname = `3/account/${accountId}/favorite/movies`;
    return AxiosFetch.GETMethod<IDiscover>(URLName.toString());
  };

  getFavoriteTVShows = async (accountId: string, sessionId: string) => {
    const URLName = new URL(this.URL);
    const URLParams = new URLSearchParams(this.searchParams);
    favoriteParams(URLParams, sessionId);
    URLName.search = URLParams.toString();
    URLName.pathname = `3/account/${accountId}/favorite/tv`;
    return AxiosFetch.GETMethod<IDiscover>(URLName.toString());
  };
}

export default TMDBService;
